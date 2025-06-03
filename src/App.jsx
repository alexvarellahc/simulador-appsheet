import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, onSnapshot, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

// Variáveis globais fornecidas pelo ambiente Canvas para Firebase
// NÃO as modifique, elas serão preenchidas em tempo de execução.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Se estiver a correr localmente no seu ambiente de desenvolvimento:
// Pode descomentar a linha abaixo e usar o seu ficheiro de logo local.
// Certifique-se de que o caminho './assets/logo alex.png' está correto em relação a este ficheiro.
// import seuLogo from './assets/logo alex.png';

// Componente Icon para SVG
const Icon = ({ name, className = '' }) => {
    const icons = {
        user: <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />,
        shield: <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.47-1.688 3.344-.48.403-.878.785-1.22 1.133-.163.163-.295.313-.385.437L12 21l-5.307-5.49a8.077 8.077 0 0 1-.386-.437 6.072 6.072 0 0 1-1.219-1.133A9.07 9.07 0 0 1 3 12c0-1.268.63-2.47 1.688-3.344.48-.403.878-.785 1.22-1.133.163-.163.295-.313.385-.437L12 3l5.307 5.49a8.077 8.077 0 0 1 .386.437 6.072 6.072 0 0 1 1.219 1.133A9.07 9.07 0 0 1 21 12Z" />,
        home: <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-4.5 9V15a2.25 2.25 0 0 0-2.25-2.25H15M10.5 21h3.75m-9.75-3v-4.5h4.5" />,
        'plus-circle': <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
        'external-link': <path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />,
        apps: <path d="M10.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM10.5 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />,
        'user-plus': <path d="M18 18.75c0 .621-.504 1.125-1.125 1.125H5.25A1.125 1.125 0 0 1 4.125 19.5v-2.25m10.5-1.125h2.25c.621 0 1.125-.504 1.125-1.125v-1.5m-3.75-3.75H10.5m-1.5-4.5h.008v.008H9Zm2.25 0h.008v.008H11.25ZM6 10.5h.008v.008H6Zm2.25 0h.008v.008H8.25Z" />,
        'pencil': <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />,
        'trash': <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.927a2.25 2.25 0 0 1-2.244-2.077L4.78 5.893m14.825 0a.375.375 0 1 0 0-.75.375.375 0 0 0 0 .75ZM7.5 14.25a.75.75 0 0 0 0 1.5h.008v.008H7.5V14.25Zm10.5 0a.75.75 0 0 0 0 1.5h.008v.008H18V14.25Zm-4.5 0a.75.75 0 0 0 0 1.5h.008v.008H13.5V14.25Z" />
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            {icons[name]}
        </svg>
    );
};

const App = () => {
    // Estados para Firebase
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false); // Para saber quando a autenticação está pronta

    // Estado para simular o login do usuário atual (será substituído pelo Firestore)
    const [userEmail, setUserEmail] = useState('admin@example.com');
    // Estado para controlar qual view está sendo exibida (welcome, apps, admin, etc.)
    const [currentView, setCurrentView] = useState('welcome');
    // Estado para armazenar o usuário que está sendo editado no painel administrativo
    const [editingUser, setEditingUser] = useState(null);
    // Estado para gerenciar os dados do formulário de adicionar/editar usuário
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        role: 'User',
        active: true,
        accessibleApps: []
    });

    // Estado para os usuários carregados do Firestore
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dados mockados para os aplicativos externos (mantidos em ordem)
    const mockExternalApps = [
        { name: 'SISTEMA CT', url: 'https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f' },
        { name: 'FINANCEIRO', url: 'https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17' },
        { name: 'PROFISSIONAIS', url: 'https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe' },
        { name: 'ENFERMARIA', url: 'https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc' },
        { name: 'OCORRÊNCIAS', url: 'https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644' },
        { name: 'CANTINA', url: 'https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad' },
        { name: 'ESTOQUE', url: 'https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93' }
    ];

    // 1. Inicialização do Firebase e Autenticação
    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const authInstance = getAuth(app);
        const dbInstance = getFirestore(app);

        setAuth(authInstance);
        setDb(dbInstance);

        // Listener para o estado de autenticação
        const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                // Se não houver usuário autenticado com token, tenta autenticar anonimamente
                try {
                    if (initialAuthToken) {
                        await signInWithCustomToken(authInstance, initialAuthToken);
                    } else {
                        await signInAnonymously(authInstance);
                    }
                    setUserId(authInstance.currentUser?.uid || crypto.randomUUID()); // Garante que userId é definido
                } catch (anonAuthError) {
                    console.error("Erro ao autenticar anonimamente:", anonAuthError);
                    setError("Falha na autenticação. Tente novamente.");
                }
            }
            setIsAuthReady(true); // Autenticação inicial verificada
        });

        return () => unsubscribe(); // Limpa o listener ao desmontar
    }, []);

    // 2. Carregar Usuários do Firestore (após autenticação e db estarem prontos)
    useEffect(() => {
        if (!db || !isAuthReady || !userId) {
            // Espera até que o Firestore e a autenticação estejam prontos
            return;
        }

        setLoading(true);
        setError(null);

        // Caminho da coleção pública para os usuários
        const usersCollectionRef = collection(db, `artifacts/${appId}/public/data/users`);

        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const fetchedUsers = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(fetchedUsers);
            setLoading(false);

            // Define o userEmail para o primeiro admin encontrado ou o primeiro usuário
            if (fetchedUsers.length > 0) {
                const adminUser = fetchedUsers.find(u => u.role === 'Admin');
                setUserEmail(adminUser ? adminUser.email : fetchedUsers[0].email);
            } else {
                setUserEmail(''); // Nenhuma usuário, limpa o email
            }

        }, (firestoreError) => {
            console.error("Erro ao carregar usuários do Firestore:", firestoreError);
            setError("Erro ao carregar usuários. Tente recarregar a página.");
            setLoading(false);
        });

        return () => unsubscribe(); // Limpa o listener ao desmontar
    }, [db, isAuthReady, userId]); // Dependências para re-executar quando db ou userId mudam

    // Funções auxiliares para obter detalhes do usuário
    const getUserRole = email => users.find(u => u.email === email)?.role || 'Guest';
    const getUserName = email => users.find(u => u.email === email)?.name || 'Unknown';
    const isUserActive = email => users.find(u => u.email === email)?.active || false;

    // Função para adicionar ou atualizar um usuário no Firestore
    const handleSaveUser = async (user) => {
        if (!db) {
            setError("Base de dados não inicializada.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const usersCollectionRef = collection(db, `artifacts/${appId}/public/data/users`);
            const userDocRef = doc(usersCollectionRef, user.id || crypto.randomUUID()); // Usa ID existente ou gera um novo

            await setDoc(userDocRef, user, { merge: true }); // 'merge: true' para atualizar campos existentes
            setEditingUser(null);
            setUserData({
                name: '',
                email: '',
                role: 'User',
                active: true,
                accessibleApps: []
            });
            setCurrentView('admin-users');
        } catch (saveError) {
            console.error("Erro ao salvar usuário no Firestore:", saveError);
            setError("Erro ao salvar usuário. Verifique os dados e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    // Função para deletar um usuário do Firestore
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

    // Lida com as mudanças nos campos do formulário de usuário
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Lida com a alternância de acesso a aplicativos no formulário
    const handleAppToggle = (appName) => {
        setUserData(prev => ({
            ...prev,
            accessibleApps: prev.accessibleApps.includes(appName)
                ? prev.accessibleApps.filter(app => app !== appName)
                : [...prev.accessibleApps, appName]
        }));
    };

    // Lida com o envio do formulário de usuário
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveUser(userData);
    };

    // Renderização condicional dos componentes com foco em centralização e ícones
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

        if (!isAuthReady || loading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                    <p className="ml-4 text-lg text-gray-700">A carregar dados...</p>
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
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Recarregar Página
                    </button>
                </div>
            );
        }

        switch (currentView) {
            case 'welcome':
                return (
                    <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Bem-vindo, {name}!</h1>
                        <p className="text-lg text-gray-600 mb-6">Sua função: <span className="font-semibold text-blue-700">{role}</span></p>
                        {active ? (
                            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
                                {role === 'Admin' && (
                                    <button
                                        onClick={() => setCurrentView('admin')}
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto"
                                    >
                                        <Icon name="shield" className="w-5 h-5" /> Painel Admin
                                    </button>
                                )}
                                <button
                                    onClick={() => setCurrentView('apps')}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto"
                                >
                                    <Icon name="apps" className="w-5 h-5" /> Ver Aplicativos
                                </button>
                            </div>
                        ) : (
                            <p className="text-red-600 text-xl font-medium mt-4">Usuário inativo. Entre em contato com o administrador.</p>
                        )}
                        <div className="mt-8 w-full px-4">
                            <label htmlFor="user-select" className="block text-gray-700 text-sm font-bold mb-2">
                                Simular Login como:
                            </label>
                            <select
                                id="user-select"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {users.map(u => (
                                    <option key={u.id} value={u.email}>{u.name} ({u.role})</option>
                                ))}
                            </select>
                        </div>
                        {userId && (
                            <p className="mt-4 text-sm text-gray-500">ID do Usuário Logado: <span className="font-mono text-gray-700 break-all">{userId}</span></p>
                        )}
                    </div>
                );

            case 'apps':
                // Filtra e exibe os aplicativos acessíveis ao usuário, mantendo a ordem de mockExternalApps
                const userApps = users.find(u => u.email === userEmail)?.accessibleApps || [];
                const sortedAccessibleApps = mockExternalApps.filter(app => userApps.includes(app.name));

                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            <Icon name="apps" className="w-6 h-6 text-purple-600" /> Seus Aplicativos
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {sortedAccessibleApps.map(app => (
                                <a
                                    key={app.name}
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-purple-800 font-semibold text-lg text-center border border-purple-200"
                                >
                                    <Icon name="external-link" className="w-6 h-6 mb-3 text-purple-600" />
                                    {app.name}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            <Icon name="home" className="w-5 h-5" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            <Icon name="shield" className="w-6 h-6 text-blue-600" /> Painel Administrativo
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <button
                                onClick={() => setCurrentView('admin-users')}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                <Icon name="user" className="w-5 h-5" /> Gerenciar Usuários
                            </button>
                            <button
                                onClick={() => {
                                    setUserData({ // Resetar o formulário para adicionar novo usuário
                                        name: '',
                                        email: '',
                                        role: 'User',
                                        active: true,
                                        accessibleApps: []
                                    });
                                    setEditingUser(null); // Garantir que não estamos em modo de edição
                                    setCurrentView('admin-add-user');
                                }}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                <Icon name="user-plus" className="w-5 h-5" /> Adicionar Novo Usuário
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            <Icon name="home" className="w-5 h-5" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            <Icon name="user" className="w-6 h-6 text-blue-600" /> Cadastro e Gerenciamento de Usuários
                        </h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Nome</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Função</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Ativo</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-800">{user.name}</td>
                                            <td className="py-3 px-4 text-gray-800">{user.email}</td>
                                            <td className="py-3 px-4 text-gray-800">{user.role}</td>
                                            <td className="py-3 px-4 text-gray-800">
                                                {user.active ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Sim</span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Não</span>
                                                )}
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setEditingUser(user); // Define o usuário a ser editado
                                                            setUserData({ ...user }); // Preenche o formulário com os dados do usuário
                                                            setCurrentView('admin-edit-user');
                                                        }}
                                                        className="p-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition duration-200"
                                                        title="Editar Usuário"
                                                    >
                                                        <Icon name="pencil" className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition duration-200"
                                                        title="Excluir Usuário"
                                                    >
                                                        <Icon name="trash" className="w-5 h-5" />
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
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            <Icon name="home" className="w-5 h-5" /> Voltar ao Painel Admin
                        </button>
                    </div>
                );

            case 'admin-add-user':
            case 'admin-edit-user':
                const isEditing = currentView === 'admin-edit-user';

                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            <Icon name="user-plus" className="w-6 h-6 text-purple-600" /> {isEditing ? 'Editar Usuário' : 'Adicionar Novo Usuário'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Função:</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={userData.role}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="active" className="text-gray-700 text-sm font-bold">Ativo</label>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Aplicativos Acessíveis:</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {/* Mapeia mockExternalApps para manter a ordem dos aplicativos */}
                                    {mockExternalApps.map(app => (
                                        <div key={app.name} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`app-${app.name}`}
                                                checked={userData.accessibleApps.includes(app.name)}
                                                onChange={() => handleAppToggle(app.name)}
                                                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor={`app-${app.name}`} className="text-gray-700 text-sm">{app.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentView('admin-users')}
                                    className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    {isEditing ? 'Atualizar Usuário' : 'Adicionar Usuário'}
                                </button>
                            </div>
                        </form>
                    </div>
                );

            default:
                return <div className="text-center p-6 text-red-500">404 - View not found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-inter">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
            <div className="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <header className="text-center mb-10">
                    {/*
                        Para usar a sua logo localmente (no seu computador),
                        descomente a linha 'import seuLogo from './assets/logo alex.png';' no topo do ficheiro
                        e use 'src={seuLogo}' abaixo.

                        No ambiente de sandbox (aqui), usamos um URL público.
                    */}
                    <img
                        src="https://placehold.co/128x128/6366F1/FFFFFF?text=LOGO" // URL do placeholder para o ambiente de sandbox
                        // src={seuLogo} // Descomente esta linha e comente a de cima para usar a sua logo localmente
                        alt="Logo da Sistemas Varella"
                        className="w-32 h-32 object-contain mx-auto mb-4 rounded-full shadow-md border-2 border-indigo-200"
                    />
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Sistemas Varella</h1>
                    <p className="text-gray-600 mt-2 text-lg">Gerenciamento de Acessos</p>
                </header>

                <main>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
