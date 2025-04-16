


import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
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
      </div>
      <div className="header__center">
        <h1 className="site-title">Lookin' Fresh</h1>
      </div>
      <div className="header__right">
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="site-logo"
        />
      </div>
    </header>
  );
};

export default Header;

