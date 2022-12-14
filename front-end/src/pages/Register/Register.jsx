import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginValidated, setValid] = useState(true);
  const { handleRegister } = useAuth();
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);

  const emailValidated = useCallback(() => {
    const regex = /\S+@\S+\.\S+/;
    const valid = regex.test(email);
    return valid;
  }, [email]);

  const enableButton = useCallback(() => {
    const minimumPassword = 6;
    const minimun = 12;
    const emailValid = emailValidated();
    if (emailValid && password.length >= minimumPassword && name.length >= minimun) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [emailValidated, name.length, password.length]);

  useEffect(() => {
    enableButton();
  }, [name, email, password, enableButton]);

  const registerUser = async () => {
    try {
      await handleRegister(name, email, password);
      navigate('/customer/products');
    } catch (error) {
      setUserAlreadyExist(true);
      console.log(error);
    }
  };

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
        onClick={ registerUser }
      >
        Cadastrar
      </button>

      <p data-testid="common_register__element-invalid_register">
        { userAlreadyExist && 'Usu??rio j?? existe' }
      </p>

    </div>
  );
}

export default Register;
