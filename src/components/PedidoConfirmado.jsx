import React from 'react';
import './PedidoConfirmado.css';

const PedidoConfirmado = () => {
  return (
    <div className="pedido-confirmado-container">
      <h2>Pedido Confirmado ✅</h2>
      <p>Obrigado pela sua compra!</p>
      <p>Enviamos a confirmação para seu e-mail.</p>
    </div>
  );
};

export default PedidoConfirmado;
