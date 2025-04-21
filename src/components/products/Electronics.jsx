


import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";
import '../../styles/products/electronics.scss';

function Electronics() {
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("✅ useEffect: All Products:", products);
    const electronics = products.filter(
      (product) => product.category?.toLowerCase() === "electronics"
    );
    console.log("🧠 Filtered Electronics:", electronics);
    setFilteredProducts(electronics);
  }, [products]);

  console.log("🔍 Electronics component mounted");
  console.log("Filtered electronics:", filteredProducts);

  return (
    <div className="electronics-wrapper">
      <div className="electronics-page">
        <h2>Electronics</h2>
        <SortProduct
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
