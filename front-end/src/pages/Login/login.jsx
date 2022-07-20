import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginValidated, setValid] = useState(false);
  const { handleLogin } = useAuth();

  function emailValidated() {
    const regex = /\S+@\S+\.\S+/;
    const valid = regex.test(email);
    return valid;
  }

  function passwordValidated(pass) {
    const minimum = 6;
    setPassword(pass);
    if (pass.length >= minimum) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  async function setLocalStorage() {
    try {
      await handleLogin(email, password);
      const { role } = (JSON.parse(localStorage.getItem('user')));
      if (role === 'seller') {
        navigate('/seller/orders');
      } else if (role === 'customer') {
        navigate('/customer/products');
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    if ((localStorage.getItem('user'))) {
      const { role } = (JSON.parse(localStorage.getItem('user')));
      if (role === 'seller') {
        navigate('/seller/orders');
      } else if (role === 'customer') {
        navigate('/customer/products');
      }
    }
  }, [navigate]);

  return (
    <div>
      <h3>Login</h3>
      <input
        name="email"
        data-testid="common_login__input-email"
        type="email"
        placeholder="email"
        value={ email }
        onChange={ ({ target }) => {
          setEmail(target.value);
          emailValidated();
        } }
      />

      <h3>Senha</h3>
      <input
        name="password"
        data-testid="common_login__input-password"
        type="password"
        placeholder="password"
        value={ password }
        onChange={ ({ target }) => {
          passwordValidated(target.value);
        } }
      />

      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !emailValidated() || !loginValidated }
        onClick={ setLocalStorage }
      >
        Login
      </button>

      <Link to="/register">
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </Link>

      <p data-testid="common_login__element-invalid-email">
        { !loginValidated && 'E-mail ou senha incorretos' }
      </p>
    </div>
  );
}

export default Login;
