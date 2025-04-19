import { useContext, useEffect, useState } from "react";
import FilterSection from "./product page components/ProductFilter";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";

function ProductPage() {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const {products} = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  

useEffect(() => {
  setFilteredProducts(products)
}, [products])

useEffect(() => {
  console.log(filteredProducts)
}, [filteredProducts])

  return (
    <div>
      <h2>Products</h2>

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
  );
}

export default ProductPage;
