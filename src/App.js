import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Telainicial from './componentes/paginas/pag-inicial';
import TelaErro from './componentes/paginas/pag-erro';
import TelaCadastro from './componentes/paginas/pag-cadastro'
import './App.css';
import BuscaTabela from './componentes/paginas/pag-tabela';

function App() {
  return (
    <div className='App'>  
        <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<Telainicial/>} />
            <Route path='/Cadastro' element={<TelaCadastro/>} />
            <Route path='/buscar' element={<BuscaTabela/>} />
            <Route path='*' element={<TelaErro/>} />
          </Routes>
        </BrowserRouter>

    </div> 
  );
}


export default App;