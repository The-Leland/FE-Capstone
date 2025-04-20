

import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import '../../styles/navigation/sidebar.scss';


const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [saleItems, setSaleItems] = useState([]);
  const location = useLocation();
  const { products } = useContext(ShopContext);
  const showSidebar = location.pathname === '/' || location.pathname === '/hero';

  if (!showSidebar) return null;
  

  useEffect(() => {
    if (products.length > 0) {
      const sale = products.filter(item => item.price < 50).slice(0, 7);
      setSaleItems(sale);
    }
  }, [products]);
  

  return (
    <aside className="sidebar">
      <div className="sidebar__search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="sidebar-sales">
        <h3>On Sale</h3>
        <ul>
          {saleItems.map((item) => (
            <li key={item.id} className="sale-item">
              <img 
                src={item.image || '/images/default-thumb.jpg'}
                // src={item.image || '/path-to-default-image.jpg'} 
                alt={item.title} 
                className="sale-thumbnail" 
                loading="lazy"
              />
              <div className="sale-info">
                <p className="title">{item.title}</p>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-info">
        <h4>Lookin' Fresh Co.</h4>
        <p>Making you look sharp since 2025.</p>
        <p>Customer support: support@lookinfresh.fake</p>
      </div>
    </aside>
  );
};

export default Sidebar;



