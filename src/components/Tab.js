import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../assets/home.png';
import '../styles/Tab.css';

function Tab({ tabs }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="alunos-container">
      <div className="tab-container">
        <div className="home-button" onClick={handleBackToHome}>
          <img src={homeIcon} alt="Home" className="home-icon" />
          Página Inicial
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) => (
          activeTab === tab.name && <div key={tab.name}>{tab.content}</div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
