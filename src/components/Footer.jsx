import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>MeuSite</h1>
                <p>Soluções inteligentes para transformar seu negócio digital</p>

                <div id="footer_social_media">
                    <a href="#" className="footer-link" id="instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" className="footer-link" id="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" className="footer-link" id="whatsapp">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <ul className="footer-list">
                <li>
                    <h3>Blog</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">Tecnologia</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Empreendimento</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Musica</a>
                </li>
            </ul>

            <ul className="footer-list">
                <li>
                    <h3>Produtos</h3>
                </li>
                <li>
                    <a href="#" className="footer-link">App</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Desktop</a>
                </li>
                <li>
                    <a href="#" className="footer-link">Cloud</a>
                </li>
            </ul>

            <div id="footer_subscribe">
                <h3>Inscrever-se</h3>

                <p>
                  Insira seu e-mail para receber notificações sobre
nossas novas soluções
                </p>

                <div id="input_group">
                    <input type="email" id="email" />
                    <button>
                        <i className="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="footer_copyright">
           Everton Eduardo - 
            2025 all rights reserved
        </div>
    </footer>
  );
};

export default Footer;
