  import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice'; // certifique-se que essa action existe
import './Pagamento.css';

const Pagamento = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    dispatch(clearCart());
    navigate('/pedido-confirmado');
  };

  return (
    <div className="pagamento-container">
      <h2>Pagamento via PIX</h2>
      <p>Use o QR Code abaixo para concluir o pagamento:</p>
      <div className="qr-code">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=chave-pix-exemplo" alt="QR Code PIX" />
      </div>
      <p className="info">Após o pagamento, clique no botão abaixo:</p>
      <button onClick={handleConfirmPayment} className="confirmar-pagamento">Já paguei</button>
    </div>
  );
};

export default Pagamento;

  
  
  // tesntando pix
  /** import React from 'react';
import { useSelector } from 'react-redux';
import './Pagamento.css';

const Pagamento = () => {
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Exemplo de montagem do código PIX com valor

 
  const chavePix = 'contato@empresa.com';
  const nome = 'Empresa Exemplo';
  const cidade = 'SAO PAULO';
  const valor = total;
  const mensagem = 'Pagamento Servico';

  const payload = `00020126360014BR.GOV.BCB.PIX0114${chavePix}5204000053039865407${valor}5802BR5913${nome}6009${cidade}62070503***6304`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(payload)}`;

  return (
    <div className="pagamento-container">
      <h2>Pagamento via PIX</h2>
      <p>Use o QR Code abaixo para concluir o pagamento de <strong>R$ {valor}</strong>:</p>
      <div className="qr-code">
        <img src={qrCodeUrl} alt="QR Code PIX" />
      </div>
      <p className="info">Após o pagamento, você receberá a confirmação por e-mail.</p>
    </div>
  );
};

export default Pagamento;
  **/ 