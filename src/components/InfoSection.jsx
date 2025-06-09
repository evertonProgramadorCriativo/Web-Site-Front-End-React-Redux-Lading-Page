import React from 'react';
import { useSelector } from 'react-redux';
import './InfoCards.css';

const InfoSection = () => {
  const cards = useSelector((state) => state.infoCards.cards);

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="info-card" key={index}>
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;


{/*
import React from 'react';
import './InfoCards.css';

const cards = [
  { title: "Velocidade", icon: "⚡", description: "Nosso site é rápido e eficiente." },
  { title: "Segurança", icon: "🔒", description: "Protegemos seus dados com segurança de ponta." },
  { title: "Confiabilidade", icon: "✅", description: "Serviços confiáveis e estáveis." },
  { title: "Suporte", icon: "📞", description: "Atendimento ao cliente dedicado." }
];

const InfoCards = () => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="info-card" key={index}>
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
*/}