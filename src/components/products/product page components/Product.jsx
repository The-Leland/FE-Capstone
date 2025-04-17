
import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ShopContext } from '../../context/ShopContext';

function ProductPage() {
    const [product, setProduct] = useState(null);
    const [showFullDesc, setShowFullDesc] = useState(false);
    const { id } = useParams();
    const { cart, setCart } = useContext(ShopContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const addToCart = () => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (!product) return <p>Loading...</p>;

  const truncate = (str, n) =>
    str.length > n ? str.slice(0, n) + '...' : str;

  return (
    <div className="product-page">
      <h2>{product.title}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>
        <strong>Description:</strong>{' '}
        {showFullDesc ? product.description : truncate(product.description, 100)}
        <button onClick={() => setShowFullDesc(prev => !prev)} style={{ marginLeft: '10px' }}>
          {showFullDesc ? 'Show less...' : 'Show more...'}
        </button>
      </p>
      <p>
        <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
      </p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
