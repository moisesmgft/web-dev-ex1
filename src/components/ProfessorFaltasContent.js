// FaltasContent.js
import React, { useState } from 'react';

import '../styles/ProfessoresFaltasContent.css';

function ProfessoresFaltasContent() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [diaAno, setDiaAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome do Aluno:', nomeAluno);
    console.log('Dia do Ano:', diaAno);
  };

  return (
    <div className="faltas-content">
      <h3>Registrar Faltas</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome do Aluno:
          <input
            className="form-input"
            type="text"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Dia do Ano:
          <input
            className="form-input"
            type="text"
            value={diaAno}
            onChange={(e) => setDiaAno(e.target.value)}
          />
        </label>
        <br />
        <button className="form-button" type="submit">Registrar Falta</button>
      </form>
    </div>
  );
}

export default ProfessoresFaltasContent;
