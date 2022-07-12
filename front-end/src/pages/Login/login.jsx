import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [loginValidated, setValid] = useState(false);

  function emailValidated() {
    const regex = /\S+@\S+\.\S+/;
    const valid = regex.test(email);
    return valid;
  }

  function passwordValidated() {
    const minimum = 5;
    if (password.length >= minimum) {
      setValid(true);
    }
  }

  return (
    <div>
      <h3>login</h3>
      <input
        data-testid="common_login__input-email"
        type="email"
        value={ email }
        onChange={ ({ target }) => {
          setEmail(target.value);
          passwordValidated();
        } }
      />

      <h3>Senha</h3>
      <input
        data-testid="common_login__input-password"
        type="password"
        value={ password }
        onChange={ ({ target }) => {
          setPassword(target.value);
          passwordValidated();
        } }
      />

      <button
        data-testid="common_login__element-invalid-email"
        type="button"
        disabled={ !loginValidated || !emailValidated() }
      >
        Entrar
      </button>

      <Link to="/register">
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Registrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
