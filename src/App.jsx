import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, setDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';

// Sua configuração do Firebase, fornecida explicitamente.
const firebaseConfig = {
  apiKey: "AIzaSyCjVr5-UHNxaBkqsg-7iEnr5GOjhDHLx-Y",
  authDomain: "simuladorappsheet.firebaseapp.com",
  projectId: "simuladorappsheet",
  storageBucket: "simuladorappsheet.firebasestorage.app",
  messagingSenderId: "161061857473",
  appId: "1:161061857473:web:9ef4fa4a9a94d4f6c5cc40",
  measurementId: "G-FBRXGWVE09"
};

// O appId agora é derivado diretamente do projectId da sua configuração do Firebase
const appId = firebaseConfig.projectId;

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
    const [formUserData, setFormUserData] = useState({
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
        try {
            const app = initializeApp(firebaseConfig);
            const authInstance = getAuth(app);
            const dbInstance = getFirestore(app);

            setAuth(authInstance);
            setDb(dbInstance);

            const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                if (user) {
                    setUserId(user.uid);
                } else {
                    try {
                        await signInAnonymously(authInstance);
                        setUserId(authInstance.currentUser?.uid || crypto.randomUUID());
                    } catch (anonAuthError) {
                        console.error("Erro ao autenticar anonimamente:", anonAuthError);
                        setError("Falha na autenticação. Por favor, verifique a configuração de autenticação anónima no Firebase.");
                    }
                }
                setIsAuthReady(true);
            });

            return () => unsubscribe();
        } catch (initError) {
            console.error("Erro na inicialização do Firebase:", initError);
            setError("Erro crítico na inicialização do sistema. Verifique a configuração do Firebase.");
            setLoading(false);
        }
    }, []);

    // 2. Carregar Usuários do Firestore (após autenticação e db estarem prontos)
    useEffect(() => {
        if (!db || !isAuthReady || !userId) {
            return;
        }

        setLoading(true);
        setError(null);
        
        const usersCollectionPath = `artifacts/${appId}/public/data/users`;
        const usersCollectionRef = collection(db, usersCollectionPath);

        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const fetchedUsers = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(fetchedUsers);
            setLoading(false);

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
            console.error("Erro ao carregar usuários do Firestore:", firestoreError);
            setError("Erro ao carregar usuários. Verifique as permissões do Firestore e tente recarregar a página.");
            setLoading(false);
        });

        const loadingTimeout = setTimeout(() => {
            if (loading) { 
                console.warn("Timeout de carregamento de usuários atingido. Verifique dados ou permissões.");
                setLoading(false);
                if (!error) { 
                    setError("O carregamento demorou muito. Verifique a conexão ou os dados.");
                }
            }
        }, 10000); // 10 segundos de timeout

        return () => {
            unsubscribe(); 
            clearTimeout(loadingTimeout); 
        };
    }, [db, isAuthReady, userId]); // Removido loading e error como dependências para evitar loop infinito

    // 3. Criar Admin Padrão se não existir
    useEffect(() => {
        if (!db || !isAuthReady || !userId) {
            return;
        }

        const createDefaultAdmin = async () => {
            const adminEmail = 'admin@example.com';
            const usersCollectionRef = collection(db, `artifacts/${appId}/public/data/users`);
            const adminDocRef = doc(usersCollectionRef, 'admin-default'); 

            try {
                const adminDoc = await getDoc(adminDocRef); 
                if (!adminDoc.exists()) { 
                    const defaultAdminUser = {
                        id: 'admin-default',
                        name: 'Admin Padrão',
                        email: adminEmail,
                        role: 'Admin',
                        active: true,
                        accessibleApps: mockExternalApps.map(app => app.name)
                    };
                    await setDoc(adminDocRef, defaultAdminUser); 
                }
            } catch (err) {
                console.error("Erro ao verificar/criar admin padrão:", err);
                setError("Erro na inicialização do admin. Recarregue a página.");
            }
        };

        createDefaultAdmin();
    }, [db, isAuthReady, userId, appId, mockExternalApps]);

    // Effect para resetar formUserData quando a view muda ou editingUser é atualizado
    useEffect(() => {
        const initialUserData = editingUser ? editingUser : {
            name: '',
            email: '',
            role: 'User',
            active: true,
            accessibleApps: []
        };
        setFormUserData(initialUserData);
    }, [currentView, editingUser]); 

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
            const userDocRef = doc(usersCollectionRef, user.id || crypto.randomUUID()); 

            await setDoc(userDocRef, user, { merge: true }); 
            setEditingUser(null);
            setFormUserData({
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
    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Lida com a alternância de acesso a aplicativos no formulário
    const handleFormAppToggle = (appName) => {
        setFormUserData(prev => ({
            ...prev,
            accessibleApps: prev.accessibleApps.includes(appName)
                ? prev.accessibleApps.filter(app => app !== appName)
                : [...prev.accessibleApps, appName]
        }));
    };

    // Lida com o envio do formulário de usuário
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveUser(formUserData);
    };

    // Renderização condicional dos componentes com foco em centralização e ícones
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

        if (!isAuthReady || loading) {
            return (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                    <p className="mt-4 text-lg text-gray-700">A carregar dados...</p>
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
                                        🛡️ Painel Admin
                                    </button>
                                )}
                                <button
                                    onClick={() => setCurrentView('apps')}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto"
                                >
                                    📱 Ver Aplicativos
                                </button>
                                {/* Removido o botão "Ver Usuários" para não-administradores */}
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
                            📱 Seus Aplicativos
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
                                    🔗 {app.name}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            🏠 Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            🛡️ Painel Administrativo
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <button
                                onClick={() => setCurrentView('admin-users')}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                👤 Gerenciar Usuários
                            </button>
                            <button
                                onClick={() => {
                                    // Ao clicar em "Adicionar Novo Usuário", resetar o formulário
                                    setEditingUser(null); // Garantir que não estamos em modo de edição
                                    // O useEffect para formUserData cuidará de resetar o estado
                                    setCurrentView('admin-add-user');
                                }}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                ➕ Adicionar Novo Usuário
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            🏠 Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            👤 Cadastro e Gerenciamento de Usuários
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
                                                            setCurrentView('admin-edit-user');
                                                        }}
                                                        className="p-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition duration-200"
                                                        title="Editar Usuário"
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition duration-200"
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
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto"
                        >
                            🏠 Voltar ao Painel Admin
                        </button>
                    </div>
                );

            case 'admin-add-user':
            case 'admin-edit-user':
                const isEditing = currentView === 'admin-edit-user';
                // O initialUserData é agora gerido pelo useEffect no topo do componente.
                // Não é necessário declará-lo aqui.

                return (
                    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            ➕ {isEditing ? 'Editar Usuário' : 'Adicionar Novo Usuário'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formUserData.name}
                                    onChange={handleFormChange}
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
                                    value={formUserData.email}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Função:</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formUserData.role}
                                    onChange={handleFormChange}
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
                                    checked={formUserData.active}
                                    onChange={handleFormChange}
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
                                                checked={formUserData.accessibleApps.includes(app.name)}
                                                onChange={() => handleFormAppToggle(app.name)}
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
        // Main container for the application, with responsive styling and font
        <div className="w-full font-inter"> 
            {/* Link to Google Fonts for 'Inter' and Tailwind CSS CDN for styling */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                /* Basic CSS Reset to ensure consistent box-sizing and remove default margins/paddings */
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%; /* Use height: 100% instead of min-height for body */
                    display: flex; /* Ensure body is a flex container */
                    flex-direction: column; /* Stack content vertically */
                    align-items: center; /* Center horizontally */
                    justify-content: center; /* Center vertically */
                    background-color: #e0f2f7; /* Cor de fundo para o body */
                }
                /* Basic styling for the body to apply the Inter font */
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
            {/* Main application card with responsive width, shadow, and rounded corners */}
            <div className="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <header className="text-center mb-10">
                    {/* Placeholder image for the logo, as local imports are not supported in sandbox */}
                    <img
                        src="https://placehold.co/128x128/6366F1/FFFFFF?text=LOGO"
                        alt="Logo"
                        className="w-32 h-32 object-contain mx-auto mb-4 rounded-full shadow-md border-2 border-indigo-200"
                    />
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Sistemas Varella</h1>
                    <p className="text-gray-600 mt-2 text-lg">Gerenciamento de Acessos</p>
                </header>

                <main>
                    {/* Renders the content based on the current view */}
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
