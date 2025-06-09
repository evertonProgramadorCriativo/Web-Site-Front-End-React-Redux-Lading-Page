import React from 'react';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <Carousel />
      <InfoSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
