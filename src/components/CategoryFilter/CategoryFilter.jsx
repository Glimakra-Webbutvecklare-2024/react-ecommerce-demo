import { useState } from 'react';

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
      <h3 className='text-md uppercase font-semibold mb-4'>Categories</h3>
      <div className="category-options">
        {categories.map((category) => (
          <label key={category.value} className="category-option flex items-center gap-4 mb-1">
            <input
              type="radio"
              name="category"
              value={category.value}
              checked={selectedCategory === category.value}
              onChange={handleCategoryChange}
              className={`relative size-4 appearance-none rounded-full border text-sm
                ${selectedCategory === category.value 
                  ? 'border-black bg-black before:bg-white'
                  : 'border-black bg-white before:bg-transparent'} 
                before:absolute before:inset-1 before:rounded-full 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 
                disabled:border-gray-200 disabled:bg-gray-100 disabled:before:bg-gray-300`}
            />
            <span className='text-sm'>{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
