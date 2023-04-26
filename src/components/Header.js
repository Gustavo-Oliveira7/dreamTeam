import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.png';

function Header() {
  return (
    <div className="header">
      <h1>header</h1>
      <Link
        to="/profile"
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
