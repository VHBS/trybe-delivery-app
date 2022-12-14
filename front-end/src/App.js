import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { CartProvider } from './contexts/CartContext';
import Admin from './pages/Admin/Admin';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/login';
import OrderDetails from './pages/Orders/OrderDetails';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import SaleDetails from './pages/Seller/SaleDetails';
import SellerOrders from './pages/Seller/SellerOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route
        path="customer/orders"
        element={
          <CartProvider>
            <Orders />
          </CartProvider>
        }
      />
      <Route
        path="customer/products"
        element={
          <CartProvider>
            <Products />
          </CartProvider>
        }
      />
      <Route
        path="customer/checkout"
        element={
          <CartProvider>
            <Checkout />
          </CartProvider>
        }
      />
      <Route
        path="/customer/orders/:id"
        element={
          <CartProvider>
            <OrderDetails />
          </CartProvider>
        }
      />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SaleDetails /> } />
      <Route path="admin/manage" element={ <Admin /> } />
      <Route path="*" element={ <p>Page not found</p> } />
    </Routes>
  );
}

export default App;
