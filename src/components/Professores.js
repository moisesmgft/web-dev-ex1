// Alunos.js
import React from 'react';
import Tab from './Tab';
import ProfessoresAtividadesContent from './ProfessorAtividadesContent';
import ProfessoresFaltasContent from './ProfessorFaltasContent';

import '../styles/Professores.css';

function Professores() {
  const tabs = [
    { name: 'atividades', label: 'Atividades', content: <ProfessoresAtividadesContent /> },
    { name: 'faltas', label: 'Registrar faltas', content: <ProfessoresFaltasContent /> }
  ];

  return <Tab tabs={tabs} />;
}

export default Professores;
