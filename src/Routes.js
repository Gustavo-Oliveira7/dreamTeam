import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import ProductRegister from './pages/ProductRegister';
import Profile from './pages/Profile';

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route path="/main" element={ <Main /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/register" element={ <ProductRegister /> } />
    </Routes>
  );
}

export default Rotas;
