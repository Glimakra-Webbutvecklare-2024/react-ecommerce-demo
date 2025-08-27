{/* Import the PNG image*/}
import defaultProductImage from '../../assets/default-product-image.png'

// Import the product props
function ProductCarousel({ products }) {
  return (
    <div className="my-16">
      {/* Heading */}
      <h2 className="text-lg font-semibold uppercase ml-8 tracking-wide mb-8">
        Our latest picks
      </h2>
      <div className="ml-8 border-b border-black w-24"></div>

      {/* Carousel */}
      {/* Container with snap attributes */}
      <div className="scrollbar-hidden flex space-x overflow-x-auto snap-mandatory snap-x">
        {/* Carousel items */}
        {products.length > 0 ? (
          products.map((product) => (
            // Map through all the products
            // Each product is a snap point
            <div
              key={product.id} 
              className="snap-start flex flex-col shrink-0 w-92 p-4"
            >
              {/* Use default image if no image is provided */}
              <img 
                src={product.productImage || defaultProductImage} 
                alt={product.title}
                className="w-full h-96 object-cover rounded mb-4" 
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.price}</p>
              <p>
                <a href="#" className="hover:underline">View Details</a>
              </p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCarousel;
