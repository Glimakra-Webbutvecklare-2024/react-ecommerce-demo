import React from 'react';
// import './ProductCard.css';

const ProductCard = ({ title = "Sample Product", price = "$99.99", category = "Sample Category", productImage = null }) => {
  return (
    <div className="mb-2">
      <div className="">
        <img src={productImage} alt={title} className="w-full h-96 object-cover mb-4 hover:scale-105 transition-all ease-in-out cursor-pointer rounded" />
      </div>
      <div className="">
        <h3>{title}</h3>
        <p className="">{price}</p>
        <p className="uppercase text-xs text-gray-600 mt-1 mb-2">- {category} -</p>
        <button className='font-medium underline-offset-4 underline cursor-pointer'>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
