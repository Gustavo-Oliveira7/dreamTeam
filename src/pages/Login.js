import React, { useContext } from 'react';
import ApiContext from '../context/context';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(ApiContext);

  const passwordLength = 6;

  return (
    <div className="loginInputs">
      <form className="formLogin">
        <h1>Login</h1>
        <p>Digite seus dados para acessar.</p>
        <label htmlFor="email">
          Digite seu email:
        </label>
        <input
          className="emailInput"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <label htmlFor="password">
          Digite sua senha:
        </label>
        <input
          className="senhaInput"
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <button
          type="button"
          className="btn"
          data-testid="login-submit-btn"
          disabled={ !(password.length > passwordLength
          && email.includes('@') && email.includes('.com')) }
          onSubmit={ console.log('alou') }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
