import React, { useState, useEffect } from 'react';
import seuLogo from './assets/logo alex.png';

const Icon = ({ name, className = '' }) => {
    const icons = {
        user: <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />,
        shield: <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.47-1.688 3.344-.48.403-.878.785-1.22 1.133-.163.163-.295.313-.385.437L12 21l-5.307-5.49a8.077 8.077 0 0 1-.386-.437 6.072 6.072 0 0 1-1.219-1.133A9.07 9.07 0 0 1 3 12c0-1.268.63-2.47 1.688-3.344.48-.403.878-.785 1.22-1.133.163-.163.295-.313.385-.437L12 3l5.307 5.49a8.077 8.077 0 0 1 .386.437 6.072 6.072 0 0 1 1.219 1.133A9.07 9.07 0 0 1 21 12Z" />,
        home: <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-4.5 9V15a2.25 2.25 0 0 0-2.25-2.25H15M10.5 21h3.75m-9.75-3v-4.5h4.5" />,
        'plus-circle': <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
        'external-link': <path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />,
        apps: <path d="M10.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM10.5 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />,
        'user-plus': <path d="M18 18.75c0 .621-.504 1.125-1.125 1.125H5.25A1.125 1.125 0 0 1 4.125 19.5v-2.25m10.5-1.125h2.25c.621 0 1.125-.504 1.125-1.125v-1.5m-3.75-3.75H10.5m-1.5-4.5h.008v.008H9Zm2.25 0h.008v.008H11.25ZM6 10.5h.008v.008H6Zm2.25 0h.008v.008H8.25Z" />
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            {icons[name]}
        </svg>
    );
};

const App = () => {
    const [userEmail, setUserEmail] = useState('admin@example.com');
    const [currentView, setCurrentView] = useState('welcome');

    // Dados mockados
    const mockExternalApps = [
        { name: 'SISTEMA CT', url: 'https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f' },
        { name: 'FINANCEIRO', url: 'https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17' },
        { name: 'PROFISSIONAIS', url: 'https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe' },
        { name: 'ENFERMARIA', url: 'https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc' },
        { name: 'OCORRÊNCIAS', url: 'https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644' },
        { name: 'CANTINA', url: 'https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad' },
        { name: 'ESTOQUE', url: 'https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93' }
    ];

    const [users, setUsers] = useState([
        { name: 'Admin', email: 'admin@example.com', role: 'Admin', active: true, accessibleApps: mockExternalApps.map(app => app.name) },
        { name: 'User', email: 'user@example.com', role: 'User', active: true, accessibleApps: ['SISTEMA CT', 'FINANCEIRO'] },
        { name: 'Guest', email: 'guest@example.com', role: 'Guest', active: true, accessibleApps: ['SISTEMA CT'] }
    ]);

    // Funções auxiliares
    const getUserRole = email => users.find(u => u.email === email)?.role || 'Guest';
    const getUserName = email => users.find(u => u.email === email)?.name || 'Unknown';
    const isUserActive = email => users.find(u => u.email === email)?.active || false;

    // Renderização condicional dos componentes
    const renderContent = () => {
        const role = getUserRole(userEmail);
        const name = getUserName(userEmail);
        const active = isUserActive(userEmail);

        switch(currentView) {
            case 'welcome':
                return (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Bem-vindo, {name}!</h1>
                        <p className="mb-4">Função: {role}</p>
                        {active ? (
                            <div className="space-y-4">
                                {role === 'Admin' && (
                                    <button 
                                        onClick={() => setCurrentView('admin')}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Painel Admin
                                    </button>
                                )}
                                <button 
                                    onClick={() => setCurrentView('apps')}
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Ver Aplicativos
                                </button>
                            </div>
                        ) : (
                            <p className="text-red-500">Usuário inativo</p>
                        )}
                    </div>
                );

            case 'apps':
                const userApps = users.find(u => u.email === userEmail)?.accessibleApps || [];
                return (
                    <div className="grid grid-cols-2 gap-4">
                        {mockExternalApps
                            .filter(app => userApps.includes(app.name))
                            .map(app => (
                                <a 
                                    key={app.name}
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white rounded shadow hover:shadow-lg"
                                >
                                    {app.name}
                                </a>
                            ))
                        }
                    </div>
                );

            case 'admin':
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Painel Administrativo</h2>
                        <button 
                            onClick={() => setCurrentView('welcome')}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Voltar
                        </button>
                    </div>
                );

            default:
                return <div>404 - View not found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <header className="text-center mb-8">
                    <img src={seuLogo} alt="Logo" className="w-32 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold">Sistemas Varella</h1>
                </header>
                
                <main>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;