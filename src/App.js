import './styles/App.css';

import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './components/Home.js'
import Alunos from './components/Alunos.js'
import Professores from './components/Professores.js'
import Admin from './components/Admin.js'
import Visitantes from './components/Visitantes.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/alunos" element={<Alunos/>} />
          <Route path="/professores" element={<Professores/>} />
          <Route path="/about" element={<Visitantes/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;