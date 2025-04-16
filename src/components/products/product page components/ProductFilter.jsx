import React from 'react';


function FilterSection({ categories, selectedCategories, setSelectedCategories }) {
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    } else {
      setSelectedCategories(prev => [...prev, category]);
    }
  };

  return (
    <div>
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
