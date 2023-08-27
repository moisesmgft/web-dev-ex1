import React from 'react';
import Tab from './Tab';
import '../styles/Visitantes.css'; // Importe o CSS
import VisitantesDescricao from './VisitantesDescricao.js';

function Visitantes() {
  const tabs = [
    { name: 'descrição', label: 'Descrição', content: <VisitantesDescricao/>}
  ];

  return <Tab tabs={tabs} />;
}

export default Visitantes;
