import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';
import Footer from './components/Footer';
import Pagamento from './components/Pagamento';
import PedidoConfirmado from './components/PedidoConfirmado';
import OfereceServicos from './pages/OfereceServicos';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/login" element={<Login />} />
         <Route path="/pagamento" element={<Pagamento />} />
         <Route path="/oferece" element={<OfereceServicos />} />
         <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
