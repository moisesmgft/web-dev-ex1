import React, { useState } from 'react';
import '../styles/AdminCadastroProfessor.css';

function AdminCadastroProfessor() {
  const [nome, setNome] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nome:', nome);
    console.log('Disciplina:', disciplina);
    console.log('Email:', email);

    setNome('');
    setDisciplina('');
    setEmail('');
  };

  return (
    <div className="admin-cadastro-professor">
      <h3>Cadastro de Professor</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome:
          <input
            className="form-input"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Disciplina:
          <input
            className="form-input"
            type="text"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button className="form-button" type="submit">Cadastrar Professor</button>
      </form>
    </div>
  );
}

export default AdminCadastroProfessor;