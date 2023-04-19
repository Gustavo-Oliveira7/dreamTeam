import React from 'react';
import profileIcon from '../images/profileIcon.png';

function Header() {
  return (
    <div className="header">
      <h1>header</h1>
      <img
        className="iconProfile"
        alt={ profileIcon }
        src={ profileIcon }
      />
    </div>
  );
}

export default Header;
