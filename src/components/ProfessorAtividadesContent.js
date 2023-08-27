import React, { useState } from 'react';
import '../styles/ProfessoresAtividadesContent.css';

function ProfessoresAtividadesContent() {
  const [nomeAtividade, setNomeAtividade] = useState('');
  const [instrucoes, setInstrucoes] = useState('');
  const [nota, setNota] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar a nota entre 0 e 10
    if (nota < 0 || nota > 10) {
      alert('A nota deve estar entre 0 e 10.');
      return;
    }

    // Continuar com o envio dos dados do formulário
    console.log('Nome da Atividade:', nomeAtividade);
    console.log('Instruções:', instrucoes);
    console.log('Nota:', nota);
  };

  return (
    <div className="professores-atividades-content">
      <h3>Atividades</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome da Atividade:
        </label>
        <input
          className="form-input"
          type="text"
          value={nomeAtividade}
          onChange={(e) => setNomeAtividade(e.target.value)}
        />
        <br />
        <label className="form-label">
          Instruções:
        </label>
        <textarea
          className="form-textarea"
          value={instrucoes}
          onChange={(e) => setInstrucoes(e.target.value)}
        />
        <br />
        <label className="form-label">
          Nota:
        </label>
        <input
          className="form-input"
          type="number"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          min="0"
          max="10"
        />
        <br />
        <button className="form-button" type="submit">Registrar Atividade</button>
      </form>
    </div>
  );
}

export default ProfessoresAtividadesContent;
