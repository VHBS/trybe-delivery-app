import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginValidated, setValid] = useState(false);

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

  return (
    <div>
      <h3>login</h3>
      <input
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
        data-testid="common_login__input-password"
        type="password"
        placeholder="password"
        value={ password }
        onChange={ ({ target }) => {
          passwordValidated(target.value);
        } }
      />

      <button
        data-testid="common_login__element-invalid-email"
        type="button"
        disabled={ !emailValidated() || !loginValidated }
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
      {console.log(emailValidated())}
      {console.log(loginValidated)}
      {!loginValidated ? <p common_login__element-invalid-email>E-mail inválido</p>
        : null}
    </div>
  );
}

export default Login;
