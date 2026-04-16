import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/app-config';
import { clearSession } from '../../utils/session';

export default function AppCrashFallback({ error, onReset }) {
  const navigate = useNavigate();
  const shouldShowDetails = typeof import.meta !== 'undefined' && import.meta.env?.DEV && Boolean(error?.message);

  const handleGoToLogin = () => {
    clearSession();
    onReset?.();
    navigate(ROUTES.login, { replace: true });
  };

  return (
    <main className="fatal-state" role="alert" aria-live="assertive">
      <div className="fatal-box">
        <span className="fatal-tag">Aplicacao indisponivel</span>
        <h1 className="fatal-title">Ocorreu uma falha inesperada.</h1>
        <p className="fatal-text">
          A interface foi protegida para evitar tela branca. Tente recarregar o estado da aplicacao
          ou voltar ao login para continuar.
        </p>

        <div className="fatal-actions">
          <Button label="Tentar novamente" icon="pi pi-refresh" onClick={onReset} />
          <Button label="Voltar ao login" outlined onClick={handleGoToLogin} />
        </div>

        {shouldShowDetails && (
          <details className="fatal-details">
            <summary>Detalhes tecnicos</summary>
            <pre>{error.message}</pre>
          </details>
        )}
      </div>
    </main>
  );
}
