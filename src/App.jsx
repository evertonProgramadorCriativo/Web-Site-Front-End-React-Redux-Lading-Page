import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import InfoCards from './components/InfoCards';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <InfoCards />
      <AboutSection />
      <ContactSection />
      <Footer />
      {/* Cards e Footer virão a seguir */}
    </>
  );
};

export default App;
