import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileIcon from '../images/profileIcon.png';

function Header() {
  const history = useNavigate();

  return (
    <div className="header">
      <h1>header</h1>
      <Link
        to="/profile"
        onClick={ history('/main') }
      >

        <img
          className="iconProfile"
          alt={ profileIcon }
          src={ profileIcon }
        />
      </Link>
    </div>
  );
}

export default Header;
