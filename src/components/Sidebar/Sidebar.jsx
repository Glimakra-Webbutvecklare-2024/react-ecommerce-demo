import React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
// import './Sidebar.css';

const Sidebar = ({ onSearch, onCategoryChange }) => {
  return (
    <aside className="w-64">
      <h2 className='text-xl uppercase mb-8'>Filters</h2>
      <SearchFilter onSearch={onSearch} />
      <CategoryFilter onCategoryChange={onCategoryChange} />
    </aside>
  );
};

export default Sidebar;
