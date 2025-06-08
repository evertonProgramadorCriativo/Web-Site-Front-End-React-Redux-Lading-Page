import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">MeuSite</div>
      <nav className="nav-links">
        <a href="#home">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
