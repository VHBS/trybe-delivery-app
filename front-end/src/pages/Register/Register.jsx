import React, { useEffect, useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginValidated, setValid] = useState(true);

  function emailValidated() {
    const regex = /\S+@\S+\.\S+/;
    const valid = regex.test(email);
    return valid;
  }

  function enableButton() {
    const minimumPassword = 6;
    const minimun = 12;
    const emailValid = emailValidated();
    if (emailValid && password.length >= minimumPassword && name.length >= minimun) {
      setValid(false);
    } else {
      setValid(true);
    }
  }

  useEffect(() => {
    enableButton();
  }, [name, email, password, enableButton]);

  return (
    <div>
      <h3>Nome</h3>
      <input
        data-testid="common_register__input-name"
        type="text"
        value={ name }
        onChange={ ({ target }) => {
          setName(target.value);
        } }
      />

      <h3>Email</h3>
      <input
        data-testid="common_register__input-email"
        type="email"
        value={ email }
        onChange={ ({ target }) => {
          setEmail(target.value);
        } }
      />

      <h3>Senha</h3>
      <input
        data-testid="common_register__input-password"
        type="password"
        value={ password }
        onChange={ ({ target }) => {
          setPassword(target.value);
        } }
      />

      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ loginValidated }
      >
        Cadastrar
      </button>

      <p data-testid="common_register__element-invalid_register">error</p>

    </div>
  );
}

export default Register;
