import './App.css';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';
import Sobre from './Components/Sobre';
import React, { useRef } from 'react';
import Logo from '../src/Components/assents/profile.jpg'
import Contato from './Components/Contato';

function App() {
  const meuLinkRef = useRef(null);

  const rolarParaSecao = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div>
        <Header rolar={rolarParaSecao} />
      </div>
      <div>
        <ProfileCard />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div>
        <Contato />
      </div>
    </div>
  );
}

export default App;
