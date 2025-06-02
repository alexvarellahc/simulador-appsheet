import React, { useState, useEffect } from 'react';

// Componente principal do aplicativo
// Certifique-se de que o nome 'App' aqui e no 'export default App;' (no final do arquivo) são idênticos.
const App = () => {
  // Simula o e-mail do usuário autenticado no AppSheet
  const [userEmail, setUserEmail] = useState('admin@example.com'); // Começa como admin para demonstração
  // Simula a view atual do AppSheet
  const [currentView, setCurrentView] = useState('welcome');

  // Simulação de outros aplicativos AppSheet e suas permissões necessárias
  const mockExternalApps = [
    // ATUALIZE ESTES ENDEREÇOS (URLs) PARA OS SEUS LINKS REAIS DO APPSHEET
    { name: 'SISTEMA CT', url: 'https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f?platform=desktop#appName=SISTEMACTvidasnovas-116808013-24-08-26&vss=H4sIAAAAAAAAA63PsQrCMBQF0F-RN-cLspXaoYhVbOliHGLzCsE2KU2qlpB_N5GK4KiOuY97uHFwlXgrLW8uQI_u_drgDBQcg2oekAFlkGplR90xIAwK3i9hsk7K6rBb7ZM0z4oqY-DBn8gLsmiAui8d-qc9BKRAZWUrcYxoJAK2AOEc6zH4LIMn0E-Wnzt8_iWUvQ9Zq5vJoKjDuF9GmVxl94ErsnUi2C3vDPoH_mKgH5IBAAA=&view=CADASTRO%20PACIENTE' },
    { name: 'FINANCEIRO', url: 'https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17?platform=desktop#appName=CONTROLEFINANCEIROVIDASNOVAS-116808013-24-08-26&vss=H4sIAAAAAAAAA63Pvw7CIBAG8FcxN_MEbMQyNnoOtnERByzXhFihKVRtCO8u9U9cnNTxvsv98l2As8ZL5WVzBLoL72mFE1AIAuqpRwFUwNIaP9hOABFQytMj5GW9YRlbFLys2DrPWMYrARHinrwsjw5o-J6i_2tFQCs0Xrcah9mdleQ9jbSehRR8uodI4DR6eejw_lS6jzFlrW1Gh2qbKv5YzeWGX3tpVGFV4lvZOYw3ehM1LKEBAAA=&view=ENTRADA%20MENSALIDADES' },
    { name: 'PROFISSIONAIS', url: 'https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe?platform=desktop#appName=CONTROLEPROFISSIONAISdemo-116808013&vss=H4sIAAAAAAAAA6WOyw6CMBRE_2XW_YLuDGFBjMQE4sa6qPSSNEJLaFFJ03-3-Fyryzs358wEnDVdKi-bE_g-fK41zeAIAvU8kAAXyKzxo-2EmEAp-0e4XWVFXtZ5JRARD-wl8OTAw5c8_7OfQSsyXreaxkW2oEnyBNN7wVLwhhAZ-snLY0f3zQmKMWWtbSZHapfG_DLCFSa_DtKojVXJ2crOUbwB5Qza8moBAAA=&view=PACIENTES' },
    { name: 'ENFERMARIA', url: 'https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc?platform=desktop#appName=ENFERMARIAdemo-116808013&vss=H4sIAAAAAAAAA63Pvw6CMBAG8FchN_cJuhFkIAqYQFysQ6VH0giUQFFJ08nBB-PFLP6Jm4uM913yu-8MnCVeMs2LE9C9-U5rHIGCYZCPLTKgDALV6E5VDAiDhNevMPM3q9SLw1UU-NN9uqXe1g-iMMnDjIEFeyAfUmMP1Pwt0sU7EpACGy1Lid3Mz5hj35Rbz5ALfjBgCdSD5scKn586xlqXlaoYehQ7V3iZon3UhNeWNyJWwl0pedWjfQCJSrShxAEAAA==&view=SALDO%20MEDICA%C3%87%C3%83O%20PACIENTES' },
    { name: 'OCORRÊNCIAS', url: 'https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644?platform=desktop#appName=CADASTROOCORRENCIASdemo-116808013&vss=H4sIAAAAAAAAA62PPQvCMBCG_4rc3MVJzFakYFCraOliHGLzCsE2KU2qlpB_N6mKiJs65vK-z93TwVniZWN5cQCy7V6vGbZAoGOQtUdkQBhMtLKNrhhEDFJe34ermKbJfEDTLFnHGc2XDBy4XfQEWTRAui855E_3RCAFikitLiU2ABoSHPQD-O9T94KMMLoL6ZPm-wt4llA1WWFgUa32hopebcLHihfQbgiwMx2PQu7f6sNRqKo3VjVfYvsd3zvlsqYuTQZF72V8kDVXJ9ciVWGjhby15ZdDdAIVazsHiAQAA&view=PAINEL%20INTERATIVO' },
    { name: 'CANTINA', url: 'https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad?platform=desktop#appName=CANTINADEMONOVO-116808013&vss=H4sIAAAAAAAAA63PsQrCMBQF0F-RN-cLspXaoagVbOliHGLzCsE2KU2qlpB_N5GK4KiOuY97uHFwlXgrLW8uQI_u_drgDBQcg2oekAFlkGplR90xIAwK3i9hsk7K6rBfpds8K6qsZODBn8gLsmiAui8d-qc9BKRAZWUrcYxoJAK2AOEc6zH4LIMn0E-Wnzt8_iWUvQ9Zq5vJoKjDuF9GmVxl94ErsdMi2C3vDPoH-wnvXZIBAAA=&view=CADASTRO%20CLIENTES' },
    { name: 'ESTOQUE', url: 'https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93?platform=desktop#vss=H4sIAAAAAAAAA6WOvQ6CMBRGX8V8c5-gm1EGouIAcbEOlV6SRqCEFpU0fXeLP9FVHe93c06Ox1nTJXeyPIHv_fta0QgOL1CMHQlwgYVpXW9qASaQyeYx5vP1cjtLiyTLBQLCgb0Ujiy4_9rA_25g0IpapytN_aSb4Kh5ovE9gXH4wBAYmsHJY0338oiFELfKlIMltYtBv4XYtE2unWzVxqhorWRtKdwAM1BSWHQBAAA=&view=SALDO%20ITENS&appName=ESTOQUECOZINHA-116808013' },
  ];

  // Dados de usuários simulados, como se estivessem em uma Google Sheet
  const initialMockUsers = [
    { name: 'Usuário Administrador', email: 'admin@example.com', role: 'Admin', active: true, accessibleApps: mockExternalApps.map(app => app.name) }, // Admin pode acessar todos os aplicativos
    { name: 'Usuário Padrão', email: 'user@example.com', role: 'User', active: true, accessibleApps: ['SISTEMA CT', 'FINANCEIRO', 'OCORRÊNCIAS'] },
    { name: 'Usuário Convidado', email: 'guest@example.com', role: 'Guest', active: true, accessibleApps: ['SISTEMA CT', 'CANTINA'] },
    { name: 'Usuário Inativo', email: 'inactive@example.com', role: 'User', active: false, accessibleApps: [] }, // Usuário inativo não pode acessar nenhum aplicativo
  ];

  // Estado para a lista de usuários, permitindo adicionar novos usuários
  const [users, setUsers] = useState(initialMockUsers);

  // Função para obter a função (role) do usuário com base no e-mail
  const getUserRole = (email) => {
    const user = users.find(u => u.email === email);
    return user ? user.role : 'Guest'; // Se não encontrar, assume 'Guest'
  };

  // Função para obter o nome do usuário com base no e-mail
  const getUserName = (email) => {
    const user = users.find(u => u.email === email);
    return user ? user.name : 'Usuário Desconhecido';
  };

  // Função para verificar se o usuário está ativo
  const isUserActive = (email) => {
    const user = users.find(u => u.email === email);
    return user ? user.active : false;
  };

  // Efeito para redirecionar para a tela de boas-vindas se o usuário não estiver ativo
  useEffect(() => {
    if (!isUserActive(userEmail)) {
      setCurrentView('welcome');
    }
  }, [userEmail]);

  // Função para adicionar um novo usuário
  const handleAddUser = (newUser) => {
    // Verifica se o e-mail já existe
    if (users.some(user => user.email === newUser.email)) {
      // Usando um modal simples para simulação, em um app real seria um modal mais elaborado
      alert('Erro: E-mail já cadastrado.');
      return false;
    }
    // Garante que accessibleApps é um array, mesmo que vazio
    setUsers([...users, { ...newUser, active: true, accessibleApps: newUser.accessibleApps || [] }]); // Adiciona accessibleApps
    return true;
  };

  // Componente de ícone (simula lucide-react ou Font Awesome)
  const Icon = ({ name, className = '' }) => {
    // Usando SVG inline para simplicidade e para evitar dependências externas
    switch (name) {
      case 'user':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 'shield':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'home':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      case 'plus-circle':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        );
      case 'external-link':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        );
      case 'apps':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        );
      default:
        return null;
    }
  };

  // Componente da tela de boas-vindas
  const WelcomeScreen = ({ userEmail, onNavigate }) => {
    const role = getUserRole(userEmail);
    const name = getUserName(userEmail);
    const active = isUserActive(userEmail);

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-full">
        <Icon name="home" className="w-16 h-16 text-indigo-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo ao AppSheet!</h2>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Você está autenticado como: <span className="font-semibold text-indigo-700">{name} ({userEmail})</span>
        </p>
        <p className="text-md text-gray-500 mb-6 text-center">
          Sua função é: <span className="font-semibold text-indigo-700">{role}</span>
          {!active && <span className="text-red-500 ml-2">(Inativo)</span>}
        </p>

        {active ? (
          <div className="flex flex-wrap justify-center gap-4">
            {/* Lógica Show If: Apenas mostra o botão se a função for 'Admin' */}
            {role === 'Admin' && (
              <button
                onClick={() => onNavigate('admin')}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Icon name="shield" className="w-5 h-5 mr-2" />
                Acessar Painel Admin
              </button>
            )}
            {/* Lógica Show If: Apenas mostra o botão se a função for 'User', 'Admin' ou 'Guest' */}
            {(role === 'User' || role === 'Admin' || role === 'Guest') && (
              <button
                onClick={() => onNavigate('externalApps')}
                className="flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Icon name="apps" className="w-5 h-5 mr-2" />
                Acessar Outros Aplicativos
              </button>
            )}
          </div>
        ) : (
          <p className="text-red-600 font-semibold text-center">Seu acesso está inativo. Por favor, contate o administrador.</p>
        )}
      </div>
    );
  };

  // Componente do Painel de Administração
  const AdminDashboard = ({ onBack }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-full">
      <Icon name="shield" className="w-16 h-16 text-red-600 mb-4" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Painel de Administração</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Aqui o administrador pode gerenciar usuários e configurações do sistema.
      </p>
      <button
        onClick={onBack}
        className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Voltar
      </button>
    </div>
  );

  // Novo Componente para Listar Aplicativos Externos
  const ExternalAppsList = ({ userEmail, getUserRole, mockExternalApps, onBack, users }) => {
    const role = getUserRole(userEmail);
    const currentUser = users.find(u => u.email === userEmail);
    const userAccessibleApps = currentUser ? currentUser.accessibleApps : []; // Obtém os apps específicos que o usuário pode acessar

    // Filtra os aplicativos externos com base na lista de apps acessíveis do usuário
    const availableApps = mockExternalApps.filter(app => userAccessibleApps.includes(app.name));

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-full">
        <Icon name="apps" className="w-16 h-16 text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Seus Aplicativos</h2>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Aqui estão os aplicativos AppSheet que você pode acessar com sua função de <span className="font-semibold text-blue-700">{role}</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mb-6">
          {availableApps.length > 0 ? (
            availableApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-blue-100 text-blue-800 rounded-lg shadow-sm hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-105 text-center font-medium"
              >
                <Icon name="external-link" className="w-5 h-5 mr-2" />
                {app.name}
              </a>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">Nenhum aplicativo disponível para sua função.</p>
          )}
        </div>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Voltar
        </button>
      </div>
    );
  };

  // Componente de Cadastro de Usuário
  const UserRegistration = ({ onAddUser, allApps }) => { // allApps é a lista completa de apps disponíveis
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('User'); // Função padrão
    const [selectedApps, setSelectedApps] = useState([]); // Estado para os apps selecionados
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

    // Lida com a seleção/desseleção de aplicativos
    const handleAppSelection = (appName) => {
      setSelectedApps(prev =>
        prev.includes(appName) ? prev.filter(app => app !== appName) : [...prev, appName]
      );
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(''); // Limpa mensagens anteriores
      setMessageType('');

      if (!name || !email || !role) {
        setMessage('Por favor, preencha todos os campos.');
        setMessageType('error');
        return;
      }

      // Validação básica de e-mail (ajustada para aceitar um ou mais pontos após o @)
      // Ex: user@domain.com ou user@sub.domain.com
      if (!/\S+@\S+\.\S+/.test(email)) {
         setMessage('Por favor, insira um e-mail válido.');
         setMessageType('error');
         return;
      }

      const success = onAddUser({ name, email, role, accessibleApps: selectedApps }); // Passa os apps selecionados
      if (success) {
        setMessage('Usuário cadastrado com sucesso!');
        setMessageType('success');
        setName('');
        setEmail('');
        setRole('User');
        setSelectedApps([]); // Limpa a seleção após o cadastro
      } else {
        setMessage('Erro ao cadastrar usuário. O e-mail já pode estar em uso.');
        setMessageType('error');
      }
    };

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-full">
        <Icon name="plus-circle" className="w-16 h-16 text-purple-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cadastro de Usuários</h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          No AppSheet, o cadastro de usuários define suas funções e acesso. As senhas são gerenciadas pelos provedores de autenticação (Google, Microsoft, etc.) e não são criadas ou armazenadas aqui.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nome Completo"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="email@exemplo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Função:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="User">Usuário Padrão</option>
              <option value="Admin">Administrador</option>
              <option value="Guest">Convidado</option>
            </select>
          </div>
          {/* Nova seção para seleção de aplicativos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Aplicativos que pode acessar:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {allApps.map(app => (
                <label key={app.name} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedApps.includes(app.name)}
                    onChange={() => handleAppSelection(app.name)}
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded"
                  />
                  <span className="text-sm text-gray-900">{app.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Icon name="plus-circle" className="w-5 h-5 mr-2" />
            Cadastrar Usuário
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-sm font-semibold ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  };


  // Renderiza a view atual
  const renderView = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomeScreen userEmail={userEmail} onNavigate={setCurrentView} />;
      case 'admin':
        // Lógica Show If: Apenas renderiza se o usuário for 'Admin' e ativo
        if (getUserRole(userEmail) === 'Admin' && isUserActive(userEmail)) {
          return <AdminDashboard onBack={() => setCurrentView('welcome')} />;
        }
        return <WelcomeScreen userEmail={userEmail} onNavigate={setCurrentView} />; // Redireciona se não tiver permissão
      case 'externalApps': // Nova rota para a lista de aplicativos externos
        // Lógica Show If: Apenas renderiza se o usuário for 'User', 'Admin' ou 'Guest' e ativo
        if ((getUserRole(userEmail) === 'User' || getUserRole(userEmail) === 'Admin' || getUserRole(userEmail) === 'Guest') && isUserActive(userEmail)) {
          return <ExternalAppsList userEmail={userEmail} getUserRole={getUserRole} mockExternalApps={mockExternalApps} onBack={() => setCurrentView('welcome')} users={users} />; // Passa users
        }
        return <WelcomeScreen userEmail={userEmail} onNavigate={setCurrentView} />; // Redireciona se não tiver permissão
      case 'register':
        return <UserRegistration onAddUser={handleAddUser} allApps={mockExternalApps} />; // Passa allApps
      default:
        return <WelcomeScreen userEmail={userEmail} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-4 font-sans antialiased">
      {/* Script para carregar Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configuração da fonte Inter */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-500 ease-in-out scale-100 opacity-100">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Simulação de Acesso AppSheet
        </h1>

        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm text-center">
          <p className="font-semibold mb-2">
            Este é um exemplo de como o AppSheet gerencia o acesso sem senhas explícitas.
          </p>
          <p>
            O AppSheet usa seu e-mail de login (Google, Microsoft, etc.) para verificar suas permissões em uma tabela de usuários.
          </p>
          <p className="mt-2">
            Use os botões abaixo para simular diferentes usuários e ver o controle de acesso em ação.
            Você também pode cadastrar novos usuários.
          </p>
          <p className="mt-2 font-bold">
            Os nomes dos aplicativos e os URLs de exemplo foram atualizados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {users.map((user) => (
            <button
              key={user.email}
              onClick={() => {
                setUserEmail(user.email);
                setCurrentView('welcome'); // Sempre volta para a tela de boas-vindas ao mudar de usuário
              }}
              className={`
                flex items-center px-5 py-2 rounded-full font-semibold text-sm
                transition duration-300 ease-in-out transform hover:scale-105
                ${userEmail === user.email
                  ? 'bg-indigo-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              <Icon name="user" className="w-4 h-4 mr-2" />
              {user.name} ({user.role}) {user.active ? '' : '(Inativo)'}
            </button>
          ))}
          <button
            onClick={() => setCurrentView('register')}
            className="flex items-center px-5 py-2 rounded-full font-semibold text-sm bg-purple-200 text-purple-700 hover:bg-purple-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Icon name="plus-circle" className="w-4 h-4 mr-2" />
            Cadastrar Novo Usuário
          </button>
        </div>

        <div className="flex justify-center items-center">
          {renderView()}
        </div>
      </div>
    </div>
  );
};

// ESSA LINHA É CRÍTICA!
// Ela exporta o componente 'App' para que 'main.jsx' possa importá-lo.
// Certifique-se de que está presente e que o nome 'App' corresponde ao nome da função acima.
export default App;
