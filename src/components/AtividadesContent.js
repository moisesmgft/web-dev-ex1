import React from 'react';
import '../styles/AtividadesContent.css';

function AtividadesContent() {
  // Aqui você pode adicionar a lógica para exibir as atividades
  return (
    <div className="atividades-content">
      <div className="atividade-card">
        <h3 className="atividade-title">Matemática</h3>
        <p className="atividade-description">Resolver exercícios de álgebra</p>
      </div>
      <div className="atividade-card">
        <h3 className="atividade-title">Física</h3>
        <p className="atividade-description">Realizar experimentos sobre ondas</p>
      </div>
    </div>
  );
}

export default AtividadesContent;
