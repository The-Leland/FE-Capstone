import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';

function FilterSection({ categories, filteredProducts, setFilteredProducts }) {
  const { products } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter(cat => cat !== category);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products, setFilteredProducts]);

  return (
    <div className="filter-section">
      <h3>Filter by Category</h3>
      {categories.map(cat => (
        <label key={cat} style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          {cat}
        </label>
      ))}
    </div>
  );
}

export default FilterSection;

