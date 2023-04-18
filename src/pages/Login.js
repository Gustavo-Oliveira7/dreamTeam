import React, { useContext } from 'react';
import ApiContext from '../context/context';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(ApiContext);

  const passwordLength = 6;

  return (
    <div>
      <form>
        <input
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <button
          type="button"
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
