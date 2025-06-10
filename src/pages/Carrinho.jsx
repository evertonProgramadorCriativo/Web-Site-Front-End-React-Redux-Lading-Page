import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import './Carrinho.css';

const Carrinho = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="carrinho-container">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: R$ {(item.price || 0).toFixed(2)}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
