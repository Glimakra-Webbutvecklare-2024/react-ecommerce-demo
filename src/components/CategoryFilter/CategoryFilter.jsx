import { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'books', label: 'Books' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'sports', label: 'Sports' }
  ];

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (onCategoryChange) {
      onCategoryChange(value);
    }
  };

  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <div className="category-options">
        {categories.map(category => (
          <label key={category.value} className="category-option">
            <input
              type="radio"
              name="category"
              value={category.value}
              checked={selectedCategory === category.value}
              onChange={handleCategoryChange}
            />
            <span>{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
