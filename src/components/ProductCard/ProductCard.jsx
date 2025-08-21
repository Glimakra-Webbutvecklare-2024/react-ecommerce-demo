import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title = "Sample Product", price = "$99.99", category = "Sample Category" }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <div style={{ 
          width: '200px', 
          height: '200px', 
          backgroundColor: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          📦
        </div>
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="category">{category}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
