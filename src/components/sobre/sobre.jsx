import React from 'react';
import { Card } from 'primereact/card';

export default function Sobre() {
  const footer = (
    <div className="sobre-creator">
      <span className="sobre-creator__eyebrow">Criacao</span>
      <strong className="sobre-creator__name">Scentia Vinces</strong>
      <span className="sobre-creator__description">
        Grupo responsavel pela concepcao e evolucao do projeto.
      </span>
    </div>
  );

  return (
    <div className="sobre flex justify-content-center align-items-center">
      <Card
        title="Stealth Lens"
        footer={footer}
      >
        <section>
          <h2>Visao Geral</h2>
          <p>
            O <strong>Stealth Lens</strong> foi criado para organizar o cadastro e a manutencao de
            empresas externas e parceiros. O sistema oferece listagem, criacao, edicao, exclusao,
            busca e paginacao em uma interface unica.
          </p>
        </section>

        <section>
          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>React para a construcao da interface do usuario</li>
            <li>PrimeReact e PrimeFlex para componentes e layout</li>
            <li>Axios para integracao com APIs REST</li>
            <li>Vite para desenvolvimento e build da aplicacao</li>
          </ul>
        </section>

        <section>
          <h2>Funcionalidades Principais</h2>
          <ul>
            <li>Cadastro e edicao de parceiros</li>
            <li>Cadastro e edicao de empresas externas</li>
            <li>Busca global nas listagens</li>
            <li>Paginacao para grandes volumes de dados</li>
          </ul>
        </section>
      </Card>
    </div>
  );
}
