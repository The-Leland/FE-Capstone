


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navigation/header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <img 
          src="/src/assets/images/smaller-header-image.png" 
          alt="Logo"
          className="site-logo"
        />
      </div>

      <div className="header__center">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products/men">Men's Clothing</Link>
          <Link to="/products/women">Women's Clothing</Link>
          <Link to="/products/electronics">Electronics</Link>
          <Link to="/products/jewelry">Jewelry</Link>
        </nav>
      </div>

      <div className="header__right">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Shopping Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;






