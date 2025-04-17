


import { useContext, useState, useEffect } from "react";
import SortProduct from "./product page components/SortProduct";
import ProductCard from "./product page components/ProductCard";
import { ShopContext } from "../context/ShopContext";


function AccessoriesPage() {
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [accessoryProducts, setAccessoryProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(product =>
        product.category.toLowerCase().includes("accessories")
      );

      const sorted = [...filtered].sort((a, b) => {
        if (sortField === "price") {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else {
          return sortOrder === "asc"
            ? a[sortField].localeCompare(b[sortField])
            : b[sortField].localeCompare(a[sortField]);
        }
      });

      setAccessoryProducts(sorted);
    }
  }, [products, sortField, sortOrder]);

  return (
    <div>
      <h2>Accessories</h2>

      <SortProduct
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="product-grid">
        {accessoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AccessoriesPage;
