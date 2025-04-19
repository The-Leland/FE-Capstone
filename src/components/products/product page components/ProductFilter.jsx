import {useContext} from 'react';
import { ShopContext } from '../../context/ShopContext';


function FilterSection({ categories, filteredProducts, setFilteredProducts }) {
    const {products} = useContext(ShopContext);

  const toggleCategory = (category) => {
    console.log(category)
    if (filteredProducts.includes(category)) {
    }  
    const productsFiltered = products.filter(product => product.category == category)
//   setFilteredProducts(productsFiltered);
console.log(productsFiltered)
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      {categories.map(cat => (
        <label key={cat} style={{ display: 'block' }}>
          <input
            type="checkbox"
            // checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          {cat}
        </label>
      ))}
    </div>
  );
}

export default FilterSection;
