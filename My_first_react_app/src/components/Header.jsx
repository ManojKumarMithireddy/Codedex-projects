import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='Head'>
      <nav>
        <ul >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;