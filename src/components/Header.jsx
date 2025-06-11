import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Header = () => {
    const cartQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
    
  );
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/oferece">Oferece Serviços</Link>
        <Link to="/login">Login</Link>
        <Link to="/carrinho" className="cart-link">
          🛒 Carrinho
          {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>}
        </Link>
        {isAuthenticated ? (
          <>
            <span>Olá, {user.username}</span>
            <button onClick={() => dispatch(logout())}>Sair</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
