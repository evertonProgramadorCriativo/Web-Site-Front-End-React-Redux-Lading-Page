import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Carrinho.css';

const Carrinho = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemover = (id) => {
    dispatch(removeFromCart(id));
  };

  const finalizarCompra = () => {
    navigate('/pagamento');
  };

  return (
    <div className="carrinho-container">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="lista-carrinho">
            {cart.map((item) => (
              <li key={item.id} className="item-carrinho">
                <span>{item.title} - R$ {item.price.toFixed(2)}</span>
                <button onClick={() => handleRemover(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button className="btn-finalizar" onClick={finalizarCompra}>Finalizar Compra (PIX)</button>
        </>
      )}
    </div>
  );
};

export default Carrinho;
