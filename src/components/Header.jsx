import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">Empresa</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/carrinho">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
