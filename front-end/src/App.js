import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login/login';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route
        path="customer/products"
        element={
          <CartProvider>
            <Products />
          </CartProvider>
        }
      />
      <Route path="customer/checkout" />
    </Routes>
  );
}

export default App;
