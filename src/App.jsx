import React, { useState, useEffect } from 'react';

// Componente de Ícone usando caminhos SVG inline
// (já que lucide-react não pode ser instalado na sandbox)
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
    // Estado para simular o login do usuário atual na UI
    const [userEmail, setUserEmail] = useState('admin@example.com');
    // Estado para controlar qual vista (tela) está sendo exibida na aplicação
    const [currentView, setCurrentView] = useState('welcome');
    // Estado para armazenar o objeto do usuário que está sendo editado no painel administrativo
    const [editingUser, setEditingUser] = useState(null);

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

    // Estado para armazenar a lista de usuários localmente.
    // Inclui um admin padrão e outros usuários para simulação.
    const [users, setUsers] = useState(() => {
        // Inicializa com dados padrão se não houver nada no localStorage (para persistência básica em recargas)
        const savedUsers = localStorage.getItem('appUsers');
        if (savedUsers) {
            return JSON.parse(savedUsers);
        }
        return [
            { id: '1', name: 'Admin Padrão', email: 'admin@example.com', role: 'Admin', active: true, accessibleApps: mockExternalApps.map(app => app.name) },
            { id: '2', name: 'Utilizador Normal', email: 'user@example.com', role: 'User', active: true, accessibleApps: ['SISTEMA CT', 'FINANCEIRO'] },
            { id: '3', name: 'Convidado', email: 'guest@example.com', role: 'Guest', active: true, accessibleApps: ['SISTEMA CT'] },
            { id: '4', name: 'Inativo', email: 'inactive@example.com', role: 'User', active: false, accessibleApps: ['SISTEMA CT'] }
        ];
    });

    // Efeito para persistir os utilizadores no localStorage sempre que o estado 'users' mudar
    useEffect(() => {
        localStorage.setItem('appUsers', JSON.stringify(users));
    }, [users]);


    // Helper function to get a user's role by email
    const getUserRole = email => users.find(u => u.email === email)?.role || 'Guest';
    // Helper function to get a user's name by email
    const getUserName = email => users.find(u => u.email === email)?.name || 'Unknown';
    // Helper function to check if a user is active by email
    const isUserActive = email => users.find(u => u.email === email)?.active || false;

    /**
     * Handles saving (adding or updating) a user.
     * If the user object has an 'id', it updates an existing user.
     * Otherwise, it adds a new user with a generated unique ID.
     * @param {object} user - The user object to save.
     */
    const handleSaveUser = (user) => {
        if (user.id) {
            // Update existing user by mapping through the users array
            setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? user : u));
        } else {
            // Add new user with a unique ID generated by crypto.randomUUID()
            setUsers(prevUsers => [...prevUsers, { ...user, id: crypto.randomUUID() }]);
        }
        setEditingUser(null); // Limpa o utilizador em edição
        setCurrentView('admin-users'); // Navega de volta para a lista de utilizadores após guardar
    };

    /**
     * Handles deleting a user from the list.
     * @param {string} userIdToDelete - The ID of the user to delete.
     */
    const handleDeleteUser = (userIdToDelete) => {
        // Filtra o utilizador com o ID correspondente
        setUsers(prevUsers => prevUsers.filter(u => u.id !== userIdToDelete));
    };

    /**
     * Componente de Formulário para Adicionar/Editar Usuário.
     * Separado para melhor organização e reutilização.
     */
    const UserForm = ({ initialUserData, onSave, onCancel, mockExternalApps }) => {
        const [userData, setUserData] = useState(initialUserData);

        // Atualiza o estado do formulário se initialUserData mudar (ex: ao selecionar outro usuário para editar)
        useEffect(() => {
            setUserData(initialUserData);
        }, [initialUserData]);

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setUserData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        };

        const handleAppToggle = (appName) => {
            setUserData(prev => ({
                ...prev,
                accessibleApps: prev.accessibleApps.includes(appName)
                    ? prev.accessibleApps.filter(app => app !== appName)
                    : [...prev.accessibleApps, appName]
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave(userData);
        };

        return (
            <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {initialUserData.id ? '✏️ Editar Usuário' : '➕ Adicionar Novo Usuário'}
                </h3>
                <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
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
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
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
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Guest">Guest</option>
                    </select>
                </div>
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id="active"
                        name="active"
                        checked={userData.active}
                        onChange={handleChange}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md cursor-pointer"
                    />
                    <label htmlFor="active" className="text-gray-700 text-base font-bold">Ativo</label>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Aplicativos Acessíveis:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
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
                        onClick={onCancel}
                        className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-lg"
                    >
                        {initialUserData.id ? 'Atualizar Usuário' : 'Adicionar Usuário'}
                    </button>
                </div>
            </form>
        );
    };


    // Renderização condicional do conteúdo principal da aplicação com base na `currentView`.
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

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
                                        <Icon name="shield" className="w-6 h-6" /> Painel Admin
                                    </button>
                                )}
                                <button
                                    onClick={() => setCurrentView('apps')}
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300 font-semibold text-lg w-full sm:w-auto"
                                >
                                    <Icon name="apps" className="w-6 h-6" /> Ver Aplicativos
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
                    </div>
                );

            case 'apps':
                const userApps = users.find(u => u.email === userEmail)?.accessibleApps || [];
                const sortedAccessibleApps = mockExternalApps.filter(app => userApps.includes(app.name));

                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-5xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            <Icon name="apps" className="w-8 h-8 text-purple-600" /> Seus Aplicativos
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
                                        <Icon name="external-link" className="w-8 h-8 mb-3 text-purple-600 group-hover:animate-bounce" /> 
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
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin':
                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            <Icon name="shield" className="w-8 h-8 text-blue-600" /> Painel Administrativo
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
                            <button
                                onClick={() => setCurrentView('admin-users')}
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-lg"
                            >
                                <Icon name="user" className="w-6 h-6" /> Gerenciar Usuários
                            </button>
                            <button
                                onClick={() => {
                                    setEditingUser(null); 
                                    setCurrentView('admin-add-user');
                                }}
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold text-lg"
                            >
                                <Icon name="user-plus" className="w-6 h-6" /> Adicionar Novo Usuário
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-3 bg-gray-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg mx-auto"
                        >
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-6xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3 animate-fade-in-down">
                            <Icon name="user" className="w-8 h-8 text-blue-600" /> Cadastro e Gerenciamento de Usuários
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
                                                        <Icon name="pencil" className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-3 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition duration-200 shadow-sm hover:shadow-md"
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
                            className="flex items-center justify-center gap-3 bg-gray-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold text-lg mx-auto"
                        >
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Painel Admin
                        </button>
                    </div>
                );

            case 'admin-add-user':
            case 'admin-edit-user':
                const isEditing = currentView === 'admin-edit-user';
                const initialUserData = isEditing ? editingUser : {
                    name: '',
                    email: '',
                    role: 'User',
                    active: true,
                    accessibleApps: []
                };

                return (
                    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-xl mx-auto text-center border border-gray-100 transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
                        <UserForm 
                            initialUserData={initialUserData}
                            onSave={handleSaveUser}
                            onCancel={() => setCurrentView('admin-users')}
                            mockExternalApps={mockExternalApps}
                        />
                    </div>
                );

            default:
                return <div className="text-center p-6 text-red-500">404 - Vista não encontrada</div>;
        }
    };

    return (
        // Contêiner principal da aplicação, com estilização responsiva e fonte
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
