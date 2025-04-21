


import { useContext, useEffect, useState } from "react";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";
import "../../styles/products/womens-clothing.scss";

function WomensClothing() {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const womensProducts = products.filter(
      product => product.category === "women's clothing"
    );
    setFilteredProducts(womensProducts);
  }, [products]);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h2>Women's Clothing</h2>

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

export default WomensClothing;




