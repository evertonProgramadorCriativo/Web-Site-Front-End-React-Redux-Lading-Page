import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Lado esquerdo - Informações */}
        <div className="contact-info">
          <h2>Contato</h2>
          <p><strong>Email:</strong> contato@empresa.com</p>
          <p><strong>Telefone:</strong> (11) 99999-9999</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
        </div>

        {/* Lado direito - Mapa */}
        <div className="contact-map">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.441417032561!2d-46.63610838538558!3d-23.588031684661944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8f317eb2f%3A0x6e3a96c8e9a84335!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Card com instruções */}
      <div className="contact-details-card">
        <h3>Como chegar & Promoções</h3>
        <ul>
          <li>A 2 quadras da estação Consolação.</li>
          <li>Próximo ao Shopping Center 3.</li>
          <li>Atendimento com hora marcada e sala climatizada.</li>
          <li>Descontos de 20% para novos clientes neste mês.</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
