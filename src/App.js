import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Telainicial from './componentes/paginas/pag-inicial';
import TelaErro from './componentes/paginas/pag-erro';
import './App.css';

function App() {

  return (
    <div className='App'>  
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Telainicial/>} />
            <Route path='*' element={<TelaErro/>} />
          </Routes>
        </BrowserRouter>

    </div> 
  );
}


export default App;