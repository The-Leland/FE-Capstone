


import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';
import "../../styles/pages/home-page.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-body">
        <Sidebar />

        <div className="home-main">
          <img
            src="/images/fresh-banner.jpg"
            alt="Fresh Banner"
            className="home-image"
          />

          <div className="home-image-grid">
            <img src="/src/assets/images/city-life.png" alt="City Life" />
            <img src="/src/assets/images/vroom.png" alt="Vroom" />
            <img src="/src/assets/images/sweet-bike-image.png" alt="Sweet Bike" />
            <img src="/src/assets/images/the-ladies.png" alt="The Ladies" />
          </div>

          <div className="home-text">
            <h1>Lookin' Fresh</h1>
            <p>Taking you from the street to the ballroom and everywhere in between.</p>
            <Link to="/hero">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


