import { Link } from 'react-router-dom';

import '../styles/Home.css';
import aluno from '../assets/aluno.png'
import teacher from '../assets/teacher.jpg'
import about from '../assets/alfa.jpeg'
import admin from '../assets/books.jpg';

function Home() {
  const routes = [
    {
      path: '/alunos',
      title: 'Alunos',
      image: aluno,
      description: 'Acesse o portal do aluno.',
    },
    {
      path: '/professores',
      title: 'Professores',
      image: teacher,
      description: 'Acesse o portal de professores.',
    },
    {
      path: '/admin',
      title: 'Administração',
      image: admin,
      description: '',
    },
    {
      path: '/about',
      title: 'Sobre nós',
      image: about,
      description: 'Saiba mais sobre a escola.',
    },
  ];

  return (
    <div className="home-container">
      {routes.map((route) => (
        <div className="route-card" key={route.path}>
          <h2>{route.title}</h2>
          <img src={route.image} alt={route.title} />
          <p>{route.description}</p>
          <Link to={route.path}>
            <button>Visitar</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
