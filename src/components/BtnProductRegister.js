import React from 'react';
import { Link } from 'react-router-dom';

function BtnProductRegister() {
  return (
    <div>
      <Link
        to="/register"
      >
        <button
          className="btn"
        >
          Registrar um Produto
        </button>
      </Link>
    </div>
  );
}

export default BtnProductRegister;
