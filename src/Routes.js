import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
    </Routes>
  );
}

export default Rotas;
