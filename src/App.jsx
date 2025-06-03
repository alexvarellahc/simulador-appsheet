import React, { useState, useEffect } from 'react';

// Icon component using inline SVG paths (as lucide-react cannot be installed in sandbox)
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
    // State to manage the current user's email for login simulation
    const [userEmail, setUserEmail] = useState('admin@example.com');
    // State to manage the current view being displayed in the application
    const [currentView, setCurrentView] = useState('welcome');
    // State to hold the user object when editing a user in the admin panel
    const [editingUser, setEditingUser] = useState(null);

    // Mock data for external applications that the system can link to
    const mockExternalApps = [
        { name: 'SISTEMA CT', url: 'https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f' },
        { name: 'FINANCEIRO', url: 'https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17' },
        { name: 'PROFISSIONAIS', url: 'https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe' },
        { name: 'ENFERMARIA', url: 'https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc' },
        { name: 'OCORRÊNCIAS', url: 'https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644' },
        { name: 'CANTINA', url: 'https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad' },
        { name: 'ESTOQUE', url: 'https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93' }
    ];

    // State to manage the list of users in the system, including their roles and app access
    const [users, setUsers] = useState([
        { id: '1', name: 'Admin', email: 'admin@example.com', role: 'Admin', active: true, accessibleApps: mockExternalApps.map(app => app.name) },
        { id: '2', name: 'User', email: 'user@example.com', role: 'User', active: true, accessibleApps: ['SISTEMA CT', 'FINANCEIRO'] },
        { id: '3', name: 'Guest', email: 'guest@example.com', role: 'Guest', active: true, accessibleApps: ['SISTEMA CT'] }
    ]);

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
        setCurrentView('admin-users'); // Navigate back to the user list after saving
    };

    /**
     * Handles deleting a user from the list.
     * @param {string} userId - The ID of the user to delete.
     */
    const handleDeleteUser = (userId) => {
        // Filter out the user with the matching ID
        setUsers(prevUsers => prevUsers.filter(u => u.id !== userId));
    };

    /**
     * Renders the main content of the application based on the currentView state.
     * Includes Welcome, Apps, Admin Panel, Manage Users, Add User, and Edit User views.
     */
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

        switch (currentView) {
            case 'welcome':
                return (
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Bem-vindo, {name}!</h1>
                        <p className="text-lg text-gray-600 mb-6">Sua função: <span className="font-semibold text-blue-700">{role}</span></p>
                        {active ? (
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                {role === 'Admin' && (
                                    <button
                                        onClick={() => setCurrentView('admin')}
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                        <Icon name="shield" className="w-6 h-6" /> Painel Admin
                                    </button>
                                )}
                                <button
                                    onClick={() => setCurrentView('apps')}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300"
                                >
                                    <Icon name="apps" className="w-6 h-6" /> Ver Aplicativos
                                </button>
                            </div>
                        ) : (
                            <p className="text-red-600 text-xl font-medium">Usuário inativo. Entre em contato com o administrador.</p>
                        )}
                        <div className="mt-8">
                            <label htmlFor="user-select" className="block text-gray-700 text-sm font-bold mb-2">
                                Simular Login como:
                            </label>
                            <select
                                id="user-select"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="shadow appearance-none border rounded-lg w-full sm:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {users.map(u => (
                                    <option key={u.id} value={u.email}>{u.name} ({u.role})</option>
                                ))}
                            </select>
                        </div>
                    </div>
                );

            case 'apps':
                // Filter external applications based on the current user's accessible apps
                const userApps = users.find(u => u.email === userEmail)?.accessibleApps || [];
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Icon name="apps" className="w-7 h-7 text-purple-600" /> Seus Aplicativos
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockExternalApps
                                .filter(app => userApps.includes(app.name))
                                .map(app => (
                                    <a
                                        key={app.name}
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-purple-800 font-semibold text-lg text-center border border-purple-200"
                                    >
                                        <Icon name="external-link" className="w-8 h-8 mb-3 text-purple-600" />
                                        {app.name}
                                    </a>
                                ))
                            }
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="mt-8 flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                        >
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Icon name="shield" className="w-7 h-7 text-blue-600" /> Painel Administrativo
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => setCurrentView('admin-users')}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                <Icon name="user" className="w-6 h-6" /> Gerenciar Usuários
                            </button>
                            <button
                                onClick={() => setCurrentView('admin-add-user')}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                <Icon name="user-plus" className="w-6 h-6" /> Adicionar Novo Usuário
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentView('welcome')}
                            className="flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                        >
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Início
                        </button>
                    </div>
                );

            case 'admin-users':
                return (
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Icon name="user" className="w-7 h-7 text-blue-600" /> Gerenciar Usuários
                        </h2>
                        <div className="overflow-x-auto">
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
                                                        onClick={() => { setEditingUser(user); setCurrentView('admin-edit-user'); }}
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
                            className="mt-8 flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                        >
                            <Icon name="home" className="w-6 h-6" /> Voltar ao Painel Admin
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
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Icon name="user-plus" className="w-7 h-7 text-purple-600" /> {isEditing ? 'Editar Usuário' : 'Adicionar Novo Usuário'}
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
        // Main container for the application, with responsive styling and font
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-inter">
            {/* Link to Google Fonts for 'Inter' and Tailwind CSS CDN for styling */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
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
