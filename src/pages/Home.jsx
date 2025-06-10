import React from 'react';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import SectionProdutos from '../components/SectionProdutos';

const Home = () => {
  return (
    <div>
      <Carousel />
      <InfoSection />
      <SectionProdutos />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
