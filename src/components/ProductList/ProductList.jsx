import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css';

const ProductList = ({ products = [] }) => {
  return (
    <div className="flex-1 p-4">
      {/* <h2>Our Products</h2> */}
      <div className="grid grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              productImage={product.productImage}
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
