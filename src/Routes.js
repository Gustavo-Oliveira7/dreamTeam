import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route path="/main" element={ <Main /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  );
}

export default Rotas;
