import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',    
    textDecoration: 'none',
  }

  return (
    <nav className='mainNav'>
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="mainNav__list">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;