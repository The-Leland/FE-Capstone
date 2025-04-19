


import React, { useState, useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import '../../styles/pages/cart.scss';



const SHIPPING_COST = 5.99;

export default function CartPage() {
    const [modal, setModal] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const { cart, setCart } = useContext(ShopContext);
    console.log(cart)

  const moreItems = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const lessItems = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
    closeModal();
  };

  const checkout = () => {
    setCart([]);
    closeModal();
  };

  const openModal = (type, item = null) => {
    setModal(type);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedItem(null);
  };

 
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal + (cart.length > 0 ? SHIPPING_COST : 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
         {cart.map(item => (
  <div key={item.id} className="cart-item">
    <img 
      src={item.product.image} 
      alt={item.product.title} 
      className="cart-item-image" 
    />
    <div className="cart-item-details">
      <div>{item.product.title}</div>
      <div>${item.product.price.toFixed(2)}</div>
      <div className="quantity-controls">
        <button onClick={() => lessItems(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => moreItems(item.id)}>+</button>
      </div>
      <button onClick={() => openModal('remove', item)}>Remove</button>
    </div>
  </div>
))}


          <div className="summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${cart.length > 0 ? SHIPPING_COST.toFixed(2) : '0.00'}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => openModal('checkout')}>Checkout</button>
          </div>
        </>
      )}

      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            {modal === 'remove' && (
              <>
                <p>Remove "{selectedItem.name}" from cart?</p>
                <button onClick={() => removeItem(selectedItem.id)}>Yes</button>
                <button onClick={closeModal}>Cancel</button>
              </>
            )}
            {modal === 'checkout' && (
              <>
                <p>Are you sure you want to checkout?</p>
                <button onClick={checkout}>Yes</button>
                <button onClick={closeModal}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

