import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Delivery App!</h1>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
