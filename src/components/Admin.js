import React, { useState } from 'react';

import '../styles/Admin.css';

import Tab from './Tab';
import AdminCadastroAluno from './AdminCadastroAluno';
import AdminCadastroProfessor from './AdminCadastroProfessor';

function Admin() {
  const tabs = [
    { name: 'cadastro-alunos', label: 'Cadastro de alunos', content: <AdminCadastroAluno/>},
    { name: 'cadastro-professor', label: 'Cadastro de professores', content: <AdminCadastroProfessor/>},
  ];

  return <Tab tabs={tabs} />;

}

export default Admin;