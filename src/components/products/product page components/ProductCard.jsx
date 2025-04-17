//to connect to cart need to link add to cart button with setCart from useContext


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const {addCart} = useContext(ShopContext);



  return (
    <div
      className="product-card"
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px',
        textAlign: 'center',
        transition: 'transform 0.2s',
        cursor: 'pointer'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.03)'}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={product.image} alt={product.title} style={{ width: '100%' }} />
        <h4>{product.title}</h4>
        <p>${product.price.toFixed(2)}</p>
      </Link>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <button onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      
      <button
        onClick={() => addCart(product, quantity)}
        disabled={quantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
