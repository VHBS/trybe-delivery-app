import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/login';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="customer/products" element={ <Products /> } />
      <Route path="customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
