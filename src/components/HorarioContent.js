import React from 'react';
import '../styles/HorarioContent.css';

function HorarioContent() {
  return (
    <div className="horario-content">
      <h3 className="horario-title">Horário de Aulas</h3>
      <p className="horario-description">Aqui está o horário de aulas:</p>
      <img className="horario-image" src="caminho/para/imagem-do-horario.png" alt="Horário de Aulas" />
    </div>
  );
}

export default HorarioContent;
