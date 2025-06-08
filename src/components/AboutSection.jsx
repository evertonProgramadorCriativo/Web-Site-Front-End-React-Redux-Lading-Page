import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>Sobre a Empresa</h2>
      <p>
        Somos uma empresa focada em inovação, tecnologia e soluções digitais que ajudam nossos clientes a alcançar seus objetivos com segurança, eficiência e confiabilidade.
      </p>

      {/* Imagens lado a lado */}
      <div className="about-images">
        <img src="https://img.freepik.com/fotos-gratis/pessoas-de-coworking-trabalhando-juntas_23-2149328285.jpg" alt="Equipe" />
        <img src="https://img.freepik.com/fotos-premium/colegas-em-grupo-e-leitura-no-escritorio-laptop-e-brainstorming-no-espaco-de-trabalho-e-trabalho-em-equipe-homens-e-mulheres-no-local-de-trabalho-com-sorriso-planejamento-e-colaboracao-de-auditor-de-projeto-ou-inicio-de-negocio_590464-387765.jpg" alt="Escritório" />
      </div>

      {/* Cards informativos */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Missão</h3>
          <p>Fornecer soluções digitais que transformam negócios com agilidade e precisão.</p>
        </div>
        <div className="about-card">
          <h3>Visão</h3>
          <p>Ser referência em tecnologia e inovação no Brasil.</p>
        </div>
        <div className="about-card">
          <h3>Valores</h3>
          <p>Transparência, comprometimento e respeito ao cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
