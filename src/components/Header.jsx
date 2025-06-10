import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const cartQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
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
      </nav>
    </header>
  );
};

export default Header;
