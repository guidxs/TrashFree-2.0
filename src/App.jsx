import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Sobre from './componentes/Sobre';
import Aplicativo from './componentes/Aplicativo';
import Nav from './componentes/Nav';
import Projeto from './componentes/Projeto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/aplicativo" element={<Aplicativo />} />
          <Route path="/projeto" element={<Projeto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
