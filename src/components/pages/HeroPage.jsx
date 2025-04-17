
// components/pages/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';

const Hero = () => {
  return (
    <div className="hero-page">
      <Sidebar />
      <div className="hero-content">
        <h2>Welcome to the Shop</h2>
        <p>Choose your category to get started</p>

        <div className="hero-categories">
          <Link to="/products">
            <img src="/images/all-products.jpg" alt="All Products" className="category-image" />
          </Link>
          <Link to="/products/clothing">
            <img src="/images/clothing.jpg" alt="Clothing" className="category-image" />
          </Link>
          <Link to="/products/accessories">
            <img src="/images/accessories.jpg" alt="Accessories" className="category-image" />
          </Link>
          <Link to="/products/electronics">
            <img src="/images/electronics.jpg" alt="Electronics" className="category-image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
