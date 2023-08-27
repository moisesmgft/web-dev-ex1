import React, { useState } from 'react';
import '../styles/AdminCadastroAluno.css'

function AdminCadastroAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Email:', email);

    setNome('');
    setIdade('');
    setEmail('');
  };

  return (
    <div className="admin-cadastro-aluno">
      <h3>Cadastro de Aluno</h3>
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
          Idade:
          <input
            className="form-input"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
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
        <button className="form-button" type="submit">Cadastrar Aluno</button>
      </form>
    </div>
  );
}

export default AdminCadastroAluno;
