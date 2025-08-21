import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products = [] }) => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
