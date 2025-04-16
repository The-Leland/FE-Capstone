


import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../navigation/Header';
import Sidebar from '../navigation/Sidebar';
// import Footer from '../navigation/Footer';
import SortProduct from "../products/product page components/SortProduct";
import ProductCard from "../products/product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";


const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />
      <img
        src="/path-to-home-image"
        alt="Fresh Banner"
        className="home-image"
      />
      <div className="home-text">
        <h1>Lookin' Fresh</h1>
        <p>Taking you from the street to the ballroom and everywhere in between.</p>
        <Link to="/hero">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
