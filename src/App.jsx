import React, { Suspense, lazy } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-dark-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Menubar } from 'primereact/menubar';
import './App.css';
import ProtectedRoute from './components/common/protected-route';
import { ROUTES } from './constants/app-config';
import { clearSession, getStoredUsername, hasActiveSession } from './utils/session';

const Login = lazy(() => import('./components/login/login'));
const ListarParceiros = lazy(() => import('./components/parceiros/listar-parceiros.component'));
const ListarEmpresasExternas = lazy(() => import('./components/empresas-externas/listar-empresas-externas'));
const Sobre = lazy(() => import('./components/sobre/sobre'));

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Bom dia';
  }

  if (hour < 18) {
    return 'Boa tarde';
  }

  return 'Boa noite';
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = hasActiveSession();
  const username = getStoredUsername();
  const shouldShowMenu = isAuthenticated && location.pathname !== ROUTES.login;

  const handleLogout = () => {
    clearSession();
    navigate(ROUTES.login, { replace: true });
  };

  const menuItems = [
    {
      label: 'Parceiros',
      command: () => navigate(ROUTES.partners),
    },
    {
      label: 'Empresas Externas',
      command: () => navigate(ROUTES.externalCompanies),
    },
    {
      label: 'Sobre',
      command: () => navigate(ROUTES.about),
    },
    {
      label: 'Sair',
      command: handleLogout,
    },
  ];

  const start = (
    <Link to={ROUTES.partners} className="app-brand">
      <span className="app-brand__name">Stealth Lens</span>
    </Link>
  );

  const end = (
    <div className="welcome flex align-items-center gap-2">
      <span className="welcome__label">{username ? `${getGreeting()}, ${username}` : ''}</span>
    </div>
  );

  return (
    <div className="app-shell">
      {shouldShowMenu && (
        <Menubar model={menuItems} start={start} end={end} className="custom-menubar" />
      )}

      <div className="page-container">
        <Suspense fallback={<div className="page-loading">Carregando...</div>}>
          <Routes>
            <Route
              path={ROUTES.login}
              element={isAuthenticated ? <Navigate to={ROUTES.partners} replace /> : <Login />}
            />
            <Route
              path={ROUTES.partners}
              element={(
                <ProtectedRoute>
                  <ListarParceiros />
                </ProtectedRoute>
              )}
            />
            <Route
              path={ROUTES.externalCompanies}
              element={(
                <ProtectedRoute>
                  <ListarEmpresasExternas />
                </ProtectedRoute>
              )}
            />
            <Route
              path={ROUTES.about}
              element={(
                <ProtectedRoute>
                  <Sobre />
                </ProtectedRoute>
              )}
            />
            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? ROUTES.partners : ROUTES.login} replace />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
