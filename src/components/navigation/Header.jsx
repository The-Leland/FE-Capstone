


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Shopping Cart</Link>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/products/men" onClick={() => setMenuOpen(false)}>Men's Clothing</Link>
          <Link to="/products/women" onClick={() => setMenuOpen(false)}>Women's Clothing</Link>
          <Link to="/products/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link>
          <Link to="/products/jewelry" onClick={() => setMenuOpen(false)}>Jewelry</Link>
        </nav>
      </div>

      <div className="header__right">
        <img src="/path-to-your-logo.png" alt="Logo" className="site-logo" />
      </div>
    </header>
  );
};

export default Header;



