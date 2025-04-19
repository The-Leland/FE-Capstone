import React, { useContext, useEffect, useState } from "react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import Sidebar from "../navigation/Sidebar";
import FilterSection from "./product page components/ProductFilter";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";
import "../../styles/products/all-products.scss";

const AllProducts = () => {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="all-products-wrapper">
      <Header />
      <div className="all-products-page">
        <Sidebar />
        <div className="all-products-content">
          <h2>All Products</h2>

          <FilterSection
            categories={["men's clothing", "jewelry", "electronics", "women's clothing"]}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />

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
      <Footer />
    </div>
  );
};

export default AllProducts;
