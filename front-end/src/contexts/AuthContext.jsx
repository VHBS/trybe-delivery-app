import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function handleLogin(email, password) {
    const { data } = await api.post('/login', {
      email,
      password,
    });

    const userData = { ...data.user, token: data.token };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }

  async function handleRegister(name, email, password) {
    const { data } = await api.post('/register', {
      name,
      email,
      password,
    });

    const userData = { ...data.user, token: data.token };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }

  return (
    <AuthContext.Provider value={ { handleLogin, handleRegister, user } }>
      { children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
