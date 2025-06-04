import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, setDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';

// Configuração do Firebase
// Prioriza as variáveis de ambiente do Canvas se existirem, caso contrário, usa a config hardcoded.
const firebaseConfig = typeof __firebase_config !== 'undefined' 
    ? JSON.parse(__firebase_config) 
    : {
        apiKey: "AIzaSyCjVr5-UHNxaBkqsg-7iEnr5GOjhDHLx-Y",
        authDomain: "simuladorappsheet.firebaseapp.com",
        projectId: "simuladorappsheet",
        storageBucket: "simuladorappsheet.firebasestorage.app",
        messagingSenderId: "161061857473",
        appId: "1:161061857473:web:9ef4fa4a9a94d4f6c5cc40",
        measurementId: "G-FBRXGWVE09"
      };

// O ID da aplicação é derivado do projectId para o caminho do Firestore.
// Usa __app_id se disponível, caso contrário, o projectId da config.
const appId = typeof __app_id !== 'undefined' ? __app_id : firebaseConfig.projectId;

const App = () => {
    // Estados para as instâncias do Firebase (Firestore e Auth)
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    // userId é o UID do utilizador autenticado no Firebase
    const [userId, setUserId] = useState(null);
    // isAuthReady indica se o processo de autenticação inicial foi concluído
    const [isAuthReady, setIsAuthReady] = useState(false); 

    // Estado para simular o login do usuário atual na UI
    // Por padrão, simula o login do "admin@example.com"
    const [userEmail, setUserEmail] = useState('admin@example.com');
    // Estado para controlar qual vista (tela) está sendo exibida na aplicação
    const [currentView, setCurrentView] = useState('welcome');
    // Estado para armazenar o objeto do usuário que está sendo editado no painel administrativo
    const [editingUser, setEditingUser] = useState(null);

    // Estado para gerenciar os dados do formulário de adicionar/editar usuário
    // É inicializado com valores vazios ou padrão
    const [formUserData, setFormUserData] = useState({
        name: '',
        email: '',
        role: 'User', // Papel padrão para novos usuários
        active: true, // Usuário ativo por padrão
        accessibleApps: [] // Nenhuns aplicativos acessíveis por padrão
    });

    // Estado para armazenar a lista de usuários carregados do Firestore
    const [users, setUsers] = useState([]);
    // Estado para controlar o estado de carregamento dos dados
    const [loading, setLoading] = useState(true); 
    // Estado para armazenar mensagens de erro que podem ser exibidas na UI
    const [error, setError] = useState(null);

    // Dados mockados para os aplicativos externos que o sistema pode gerenciar.
    // Mantidos em ordem para exibição consistente.
    const mockExternalApps = [
        { name: 'SISTEMA CT', url: 'https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f' },
        { name: 'FINANCEIRO', url: 'https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17' },
        { name: 'PROFISSIONAIS', url: 'https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe' },
        { name: 'ENFERMARIA', url: 'https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc' },
        { name: 'OCORRÊNCIAS', url: 'https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644' },
        { name: 'CANTINA', url: 'https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad' },
        { name: 'ESTOQUE', url: 'https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93' }
    ];

    // Efeito para inicializar o Firebase App, Auth e Firestore.
    // É executado apenas uma vez, na montagem inicial do componente.
    useEffect(() => {
        try {
            const app = initializeApp(firebaseConfig);
            const authInstance = getAuth(app);
            const dbInstance = getFirestore(app);

            setAuth(authInstance);
            setDb(dbInstance);

            // Observador do estado de autenticação do Firebase.
            // Garante que o userId é atualizado e a autenticação é tratada.
            const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                if (user) {
                    // Se um utilizador estiver logado (mesmo que anonimamente), define o userId
                    setUserId(user.uid);
                } else {
                    // Se nenhum utilizador estiver logado, tenta autenticar anonimamente
                    try {
                        await signInAnonymously(authInstance);
                        // Define o userId com o UID do utilizador anónimo ou um UUID aleatório como fallback
                        setUserId(authInstance.currentUser?.uid || crypto.randomUUID());
                    } catch (anonAuthError) {
                        console.error("Erro ao autenticar anonimamente:", anonAuthError);
                        setError("Falha na autenticação. Por favor, verifique a configuração de autenticação anónima no Firebase.");
                    }
                }
                setIsAuthReady(true); // Marca a autenticação inicial como concluída
            });

            // Retorna uma função de limpeza para desinscrever o observador de autenticação
            return () => unsubscribe();
        } catch (initError) {
            console.error("Erro na inicialização do Firebase:", initError);
            setError("Erro crítico na inicialização do sistema. Verifique a configuração do Firebase.");
            setLoading(false);
        }
    }, []); // Array de dependências vazio significa que este efeito é executado apenas uma vez

    // Efeito para carregar usuários do Firestore e criar o usuário admin padrão.
    // Este efeito depende das instâncias do DB, Auth e do userId estarem prontos.
    useEffect(() => {
        // Só executa se o DB e a autenticação estiverem prontos e houver um userId válido.
        if (!db || !isAuthReady || !userId) {
            return;
        }

        setLoading(true); // Inicia o estado de carregamento
        setError(null); // Limpa quaisquer erros anteriores

        // Referência à coleção de usuários públicos no Firestore
        const usersCollectionPath = `artifacts/${appId}/public/data/users`;
        const usersCollectionRef = collection(db, usersCollectionPath);

        // Observador em tempo real para a coleção de usuários.
        // onSnapshot mantém 'users' atualizado com as alterações no Firestore.
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const fetchedUsers = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(fetchedUsers); // Atualiza o estado com os usuários obtidos
            setLoading(false); // Desativa o estado de carregamento

            // Define o email do usuário simulado para o admin padrão, se existir,
            // ou para o primeiro usuário na lista, ou vazio se não houver usuários.
            if (fetchedUsers.length > 0) {
                const adminUser = fetchedUsers.find(u => u.email === 'admin@example.com'); 
                if (adminUser) {
                    setUserEmail(adminUser.email);
                } else {
                    setUserEmail(fetchedUsers[0].email); 
                }
            } else {
                setUserEmail('');
            }

        }, (firestoreError) => {
            // Lida com erros ao carregar dados do Firestore, incluindo permissões negadas.
            console.error("Erro ao carregar usuários do Firestore:", firestoreError.code, firestoreError.message);
            setError(`Erro ao carregar usuários: ${firestoreError.message}. Verifique as permissões do Firestore e tente recarregar a página.`);
            setLoading(false);
        });

        // Função assíncrona para tentar criar o usuário admin padrão se ele não existir.
        const createDefaultAdmin = async () => {
            const adminDocRef = doc(usersCollectionRef, 'admin-default'); 
            try {
                const adminDoc = await getDoc(adminDocRef); 
                if (!adminDoc.exists()) { 
                    // Se o documento admin-default não existir, cria-o.
                    const defaultAdminUser = {
                        id: 'admin-default',
                        name: 'Admin Padrão',
                        email: 'admin@example.com',
                        role: 'Admin',
                        active: true,
                        accessibleApps: mockExternalApps.map(app => app.name)
                    };
                    await setDoc(adminDocRef, defaultAdminUser); 
                }
            } catch (err) {
                console.error("Erro ao verificar/criar admin padrão:", err);
                // Este erro não bloqueia a UI, pois o carregamento principal é tratado pelo onSnapshot.
            }
        };

        createDefaultAdmin(); // Chama a função para criar o admin padrão

        // Define um timeout para desativar o estado de carregamento se a operação demorar muito.
        // Isso impede que a UI fique presa no "carregando" indefinidamente.
        const loadingTimeout = setTimeout(() => {
            if (loading) { 
                console.warn("Timeout de carregamento de usuários atingido. Verifique dados ou permissões.");
                setLoading(false);
                if (!error) { 
                    // Define uma mensagem de erro genérica se nenhuma outra tiver sido definida
                    setError("O carregamento demorou muito. Verifique a conexão ou os dados.");
                }
            }
        }, 15000); // 15 segundos de timeout

        // Função de limpeza para desinscrever o observador e limpar o timeout.
        return () => {
            unsubscribe(); 
            clearTimeout(loadingTimeout); 
        };
    }, [db, isAuthReady, userId, appId, mockExternalApps]); // Dependências deste efeito

    // Efeito para resetar os dados do formulário quando a vista muda ou o usuário em edição é atualizado.
    useEffect(() => {
        // Define os dados iniciais do formulário: se estiver a editar, usa os dados do editingUser;
        // caso contrário, usa um objeto vazio para um novo usuário.
        const initialUserData = editingUser ? editingUser : {
            name: '',
            email: '',
            role: 'User',
            active: true,
            accessibleApps: []
        };
        setFormUserData(initialUserData);
    }, [currentView, editingUser]); 

    // Funções auxiliares para obter detalhes do usuário a partir da lista 'users'.
    const getUserRole = email => users.find(u => u.email === email)?.role || 'Guest';
    const getUserName = email => users.find(u => u.email === email)?.name || 'Unknown';
    const isUserActive = email => users.find(u => u.email === email)?.active || false;

    /**
     * Função assíncrona para adicionar ou atualizar um usuário no Firestore.
     * @param {object} user - O objeto do usuário a ser salvo.
     */
    const handleSaveUser = async (user) => {
        if (!db) {
            setError("Base de dados não inicializada.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const usersCollectionRef = collection(db, `artifacts/${appId}/public/data/users`);
            // Se o usuário já tiver um ID, usa-o; caso contrário, gera um novo UUID.
            const userDocRef = doc(usersCollectionRef, user.id || crypto.randomUUID()); 

            // Usa setDoc com merge: true para atualizar ou criar o documento.
            await setDoc(userDocRef, user, { merge: true }); 
            setEditingUser(null); // Limpa o usuário em edição
            // Reseta o formulário para adicionar um novo usuário
            setFormUserData({
                name: '',
                email: '',
                role: 'User',
                active: true,
                accessibleApps: []
            });
            setCurrentView('admin-users'); // Volta para a lista de usuários
        } catch (saveError) {
            console.error("Erro ao salvar usuário no Firestore:", saveError);
            setError("Erro ao salvar usuário. Verifique os dados e tente novamente.");
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    /**
     * Função assíncrona para deletar um usuário do Firestore.
     * @param {string} userIdToDelete - O ID do usuário a ser deletado.
     */
    const handleDeleteUser = async (userIdToDelete) => {
        if (!db) {
            setError("Base de dados não inicializada.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const usersCollectionRef = collection(db, `artifacts/${appId}/public/data/users`);
            await deleteDoc(doc(usersCollectionRef, userIdToDelete)); 
        } catch (deleteError) {
            console.error("Erro ao deletar usuário do Firestore:", deleteError);
            setError("Erro ao deletar usuário. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    /**
     * Lida com as mudanças nos campos do formulário de usuário.
     * @param {object} e - O evento de mudança.
     */
    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value // Lida com checkboxes e outros inputs
        }));
    };

    /**
     * Lida com a alternância de acesso a aplicativos no formulário de usuário.
     * Adiciona ou remove o nome do aplicativo da lista accessibleApps.
     * @param {string} appName - O nome do aplicativo a ser alternado.
     */
    const handleFormAppToggle = (appName) => {
        setFormUserData(prev => ({
            ...prev,
            accessibleApps: prev.accessibleApps.includes(appName)
                ? prev.accessibleApps.filter(app => app !== appName) // Remove se já estiver incluído
                : [...prev.accessibleApps, appName] // Adiciona se não estiver incluído
        }));
    };

    /**
     * Lida com o envio do formulário de usuário.
     * @param {object} e - O evento de envio do formulário.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        handleSaveUser(formUserData); // Chama a função para salvar o usuário
    };

    // Renderização condicional do conteúdo principal da aplicação com base na `currentView`.
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

        // Exibe o estado de carregamento ou mensagens de erro
        if (!isAuthReady || loading) {
            return (
                <div className="flex flex-col items-center justify-center h-64 text-gray-700">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                    <p className="mt-4 text-lg">A carregar dados...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center p-6 bg-red-100 text-red-700 rounded-lg shadow-md max-w-lg mx-auto">
                    <p className="font-bold text-xl mb-2">Erro:</p>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Recarregar Página
                    </button>
                </div>
            );
        }

        // Renderiza as diferentes vistas da aplicação
        switch (currentView) {
            case 'welcome':
                return (
                    <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg mx-auto flex flex-col items-center justify-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">Bem-vindo, {name}!</h1>
                        <p className="text-xl text-gray-700 mb-8 animate-fade-in">Sua função: <span className="font-bold text-indigo-600">{role}</span></p>
                        {active ? (
                            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full px-4">
                                {role === 'Admin' && (
                                    <button
                                        onClick={() => setCurrentView('admin')}
                                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 font-semibold text-lg w-full sm:w-auto"
                                    >
                                        🛡️ Painel Admin
                                    </button>
                                )}
                                <button
                                    onClick={() => setCurrentView('apps')}
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300 font-semibold text-lg w-full sm:w-auto"
                                >
                                    📱 Ver Aplicativos
                                </button>
                            </div>
                        ) : (
                            <p className="text-red-600 text-2xl font-bold mt-6 animate-pulse">Usuário inativo. Entre em contato com o administrador.</p>
                        )}
                        <div className="mt-10 w-full px-4">
                            <label htmlFor="user-select" className="block text-gray-800 text-base font-bold mb-3">
                                Simular Login como:
                            </label>
                            <select
                                id="user-select"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="shadow-inner appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
                            >
                                {users.map(u => (
                                    <option key={u.id} value={u.email}>{u.name} ({u.role})</option>
                                ))}
                            </select>
                        </div>
                        {userId && (
                            <p className="mt-6 text-sm text-gray-500">ID do Usuário Logado: <span className="font-mono text-gray-700 break-all bg-gray-100 p-2 rounded-md">{userId}</span></p>
                        )}
                    </div>
                );

            case 'apps':
                const userApps = users.find(u => u.email === userEmail)?.accessibleApps || [];
                const sortedAccessibleApps = mockExternalApps.filter(app => userApps.includes(app.name));

                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-5xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            📱 Seus Aplicativos
                        </h2>
                        {sortedAccessibleApps.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                                {sortedAccessibleApps.map(app => (
                                    <a
                                        key={app.name}
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-purple-800 font-semibold text-lg text-center border border-purple-200 group"
                                    >
                                        <span className="text-4xl mb-3 group-hover:animate-bounce">🔗</span> 
                                        {app.name}
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xl text-gray-600 mb-10">Nenhum aplicativo acessível. Contacte o administrador.</p>
                        )}
                        
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-3 bg-gray-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg mx-auto"
                        >
                            🏠 Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin':
                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            🛡️ Painel Administrativo
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
                            <button
                                onClick={() => setCurrentView('admin-users')}
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-lg"
                            >
                                👤 Gerenciar Usuários
                            </button>
                            <button
                                onClick={() => {
                                    setEditingUser(null); 
                                    setFormUserData({ // Reset form data for new user
                                        name: '',
                                        email: '',
                                        role: 'User',
                                        active: true,
                                        accessibleApps: []
                                    });
                                    setCurrentView('admin-add-user');
                                }}
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold text-lg"
                            >
                                ➕ Adicionar Novo Usuário
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-3 bg-gray-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg mx-auto"
                        >
                            🏠 Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-6xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            👤 Cadastro e Gerenciamento de Usuários
                        </h2>
                        <div className="overflow-x-auto mb-10 rounded-lg border border-gray-200 shadow-md">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gradient-to-r from-gray-100 to-gray-200 border-b border-gray-300">
                                    <tr>
                                        <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Nome</th>
                                        <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                                        <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Função</th>
                                        <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ativo</th>
                                        <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} className="border-b border-gray-100 hover:bg-blue-50 transition duration-150">
                                            <td className="py-4 px-6 text-gray-800 font-medium">{user.name}</td>
                                            <td className="py-4 px-6 text-gray-700 text-sm">{user.email}</td>
                                            <td className="py-4 px-6 text-gray-700">{user.role}</td>
                                            <td className="py-4 px-6 text-gray-800">
                                                {user.active ? (
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 shadow-sm">✅ Sim</span>
                                                ) : (
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 shadow-sm">❌ Não</span>
                                                )}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setEditingUser(user); 
                                                            setCurrentView('admin-edit-user');
                                                        }}
                                                        className="p-3 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition duration-200 shadow-sm hover:shadow-md"
                                                        title="Editar Usuário"
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-3 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition duration-200 shadow-sm hover:shadow-md"
                                                        title="Excluir Usuário"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button
                            onClick={() => setCurrentView('admin')}
                            className="flex items-center justify-center gap-3 bg-gray-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg mx-auto"
                        >
                            🏠 Voltar ao Painel Admin
                        </button>
                    </div>
                );

            case 'admin-add-user':
            case 'admin-edit-user':
                const isEditing = currentView === 'admin-edit-user';
                // Set initial form data based on whether it's an edit or add operation
                const initialUserData = isEditing ? editingUser : {
                    name: '',
                    email: '',
                    role: 'User',
                    active: true,
                    accessibleApps: []
                };

                // State for the form fields
                const [userData, setUserData] = useState(initialUserData);

                // Effect to reset userData when the view changes or editingUser is updated
                useEffect(() => {
                    setUserData(initialUserData);
                }, [currentView, editingUser]);

                /**
                 * Handles changes to input fields in the user form.
                 * Updates the userData state accordingly.
                 */
                const handleChange = (e) => {
                    const { name, value, type, checked } = e.target;
                    setUserData(prev => ({
                        ...prev,
                        [name]: type === 'checkbox' ? checked : value
                    }));
                };

                /**
                 * Toggles the accessibility of an app for the current user being edited/added.
                 * @param {string} appName - The name of the app to toggle.
                 */
                const handleAppToggle = (appName) => {
                    setUserData(prev => ({
                        ...prev,
                        accessibleApps: prev.accessibleApps.includes(appName)
                            ? prev.accessibleApps.filter(app => app !== appName) // Remove app if already present
                            : [...prev.accessibleApps, appName] // Add app if not present
                    }));
                };

                /**
                 * Handles the form submission for adding or updating a user.
                 * Prevents default form submission and calls handleSaveUser.
                 */
                const handleSubmit = (e) => {
                    e.preventDefault();
                    handleSaveUser(userData);
                };

                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            {isEditing ? '✏️ Editar Usuário' : '➕ Adicionar Novo Usuário'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-800 text-base font-bold mb-2">Nome:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    className="shadow-inner appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-800 text-base font-bold mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="shadow-inner appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-gray-800 text-base font-bold mb-2">Função:</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={userData.role}
                                    onChange={handleChange}
                                    className="shadow-inner appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="Guest">Guest</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="active"
                                    name="active"
                                    checked={userData.active}
                                    onChange={handleChange}
                                    className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md cursor-pointer"
                                />
                                <label htmlFor="active" className="text-gray-800 text-base font-bold">Ativo</label>
                            </div>
                            <div>
                                <label className="block text-gray-800 text-base font-bold mb-2">Aplicativos Acessíveis:</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    {mockExternalApps.map(app => (
                                        <div key={app.name} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`app-${app.name}`}
                                                checked={userData.accessibleApps.includes(app.name)}
                                                onChange={() => handleAppToggle(app.name)}
                                                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                            />
                                            <label htmlFor={`app-${app.name}`} className="text-gray-700 text-sm font-medium">{app.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setCurrentView('admin-users')}
                                    className="flex items-center justify-center gap-2 bg-gray-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-lg"
                                >
                                    {isEditing ? 'Atualizar Usuário' : 'Adicionar Usuário'}
                                </button>
                            </div>
                        </form>
                    </div>
                );

            default:
                return <div className="text-center p-6 text-red-500">404 - Vista não encontrada</div>;
        }
    };

    return (
        <div className="w-full font-inter min-h-screen flex items-center justify-center py-10 bg-gradient-to-br from-blue-50 to-indigo-100"> 
            {/* Link para Google Fonts para 'Inter' e CDN do Tailwind CSS para estilização */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                /* Animações CSS para um toque mais bonito */
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: .5;
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.6s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                `}
            </style>
            {/* Contêiner principal da aplicação com largura responsiva, sombra e cantos arredondados */}
            <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
                <header className="text-center mb-12">
                    {/* Imagem de placeholder para o logotipo */}
                    <img
                        src="https://placehold.co/150x150/6366F1/FFFFFF?text=LOGO"
                        alt="Logo"
                        className="w-36 h-36 object-contain mx-auto mb-6 rounded-full shadow-lg border-4 border-indigo-300"
                    />
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight animate-fade-in-down">Sistemas Varella</h1>
                    <p className="text-xl text-gray-600 mt-3 animate-fade-in">Gerenciamento de Acessos Moderno</p>
                </header>

                <main>
                    {/* Renderiza o conteúdo com base na vista atual */}
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
