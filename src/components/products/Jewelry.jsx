


import { useContext, useEffect, useState } from "react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";
import "../../styles/products/jewelry.scss";

function Jewelry() {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const jewelry = products.filter(
      product => product.category === "jewelry"
    );
    setFilteredProducts(jewelry);
  }, [products]);

  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">
        <h2>Jewelry</h2>

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
      <Footer />
    </div>
  );
}

export default Jewelry;

