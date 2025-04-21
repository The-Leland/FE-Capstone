


import { useContext, useEffect, useState } from "react";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";
import "../../styles/products/mens-clothing.scss";

function MensClothing() {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const mensProducts = products.filter(
      product => product.category === "men's clothing"
    );
    setFilteredProducts(mensProducts);
  }, [products]);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h2>Men's Clothing</h2>
        <SortProduct
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MensClothing;


  