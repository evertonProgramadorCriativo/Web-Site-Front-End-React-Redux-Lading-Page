import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './SectionProdutos.css';

const produtos = [
  {
    id: 1,
    title: 'Serviço Rápido',
    description: 'Entrega rápida com qualidade.',
    price: 49.99,
  },
  {
    id: 2,
    title: 'Suporte Premium',
    description: 'Atendimento 24h para você.',
    price: 89.99,
  },
  {
    id: 3,
    title: 'Segurança Total',
    description: 'Garantia e proteção de dados.',
    price: 99.99,
  },
];

const SectionProdutos = () => {
  const dispatch = useDispatch();
  const [mensagem, setMensagem] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setMensagem(`${product.title} foi adicionado ao carrinho!`);

    setTimeout(() => {
      setMensagem('');
    }, 3000); // 3 segundos
  };

  return (
    <section className="produtos">
      <h2>Nossos Produtos</h2>

      {mensagem && (
        <div className="notificacao-carrinho">
          {mensagem}
        </div>
      )}

      <div className="produtos-lista">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
            <p><strong>R$ {produto.price.toFixed(2)}</strong></p>
            <button onClick={() => handleAddToCart(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProdutos;
