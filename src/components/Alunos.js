import React, { useState } from 'react';
import Tab from './Tab';
import '../styles/Alunos.css';
import AtividadesContent from './AtividadesContent';
import HorarioContent from './HorarioContent';

function Alunos() {
  const tabs = [
    { name: 'atividades', label: 'Atividades', content: <AtividadesContent /> },
    { name: 'horario', label: 'Horário de Aulas', content: <HorarioContent /> }
  ];

  return <Tab tabs={tabs} />;

}

export default Alunos;
