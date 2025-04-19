


import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import "../../styles/pages/hero-page.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Header />
      <div className="hero-page">
        <Sidebar />
        <div className="hero-content">
          <h2>Welcome to the Shop</h2>
          <p>Choose your category to get started</p>

          <div className="hero-categories">
            <Link to="/products/men">
              <img src="/images/mens.jpg" alt="Men's Clothing" className="category-image" />
            </Link>
            <Link to="/products/women">
              <img src="/images/womens.jpg" alt="Women's Clothing" className="category-image" />
            </Link>
            <Link to="/products/electronics">
              <img src="/images/electronics.jpg" alt="Electronics" className="category-image" />
            </Link>
            <Link to="/products/jewelry">
              <img src="/images/jewelry.jpg" alt="Jewelry" className="category-image" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;

