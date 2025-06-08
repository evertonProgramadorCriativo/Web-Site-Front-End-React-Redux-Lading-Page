import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import InfoCards from './components/InfoCards';

const App = () => {
  return (
    <>
       <Header />
       <Carousel />  
       <InfoCards  />
      {/* Cards e Footer virão a seguir */}
    </>
  );
};

export default App;
