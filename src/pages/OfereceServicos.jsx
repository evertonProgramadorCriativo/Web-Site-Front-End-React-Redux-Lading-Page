import React, { useState } from 'react';
import './OfereceServicos.css';

const OfereceServicos = () => {
  const [form, setForm] = useState({
    nome: '',
    servico: '',
    descricao: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Serviço enviado:', form);
    setEnviado(true);
    setForm({ nome: '', servico: '', descricao: '' });
  };

  return (
    <div className="oferece-container">
      <h2>Ofereça seu Serviço</h2>
      <p>Preencha o formulário abaixo para divulgar seus serviços na nossa plataforma:</p>
      
      {enviado && <p className="sucesso">✅ Serviço enviado com sucesso!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="servico"
          placeholder="Nome do serviço"
          value={form.servico}
          onChange={handleChange}
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição do serviço"
          value={form.descricao}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default OfereceServicos;
