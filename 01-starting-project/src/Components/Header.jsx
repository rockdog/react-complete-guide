import React from 'react';
import coreConceptsImg from '../assets/react-core-concepts.png';
import './Header.css';

const descriptions = ['Fundamental', 'Crucial', 'Core'];

const getRandomInt = max => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const prefix = descriptions[getRandomInt(descriptions.length - 1)];

  return (
    <header>
      <img src={coreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {prefix} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
