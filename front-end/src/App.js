import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { CartProvider } from './contexts/CartContext';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/login';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />
        <Route path="customer/orders" element={ <Orders /> } />
        <Route path="customer/orders/:id" element={ <h1>order</h1> } />
      </Routes>
      <CartProvider>
        <Routes>
          <Route path="customer/products" element={ <Products /> } />
          <Route
            path="customer/checkout"
            element={ <Checkout /> }
          />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
