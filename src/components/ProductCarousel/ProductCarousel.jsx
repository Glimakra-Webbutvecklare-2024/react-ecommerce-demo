export default function ProductCarousel({ products = [] }) {
  return (
    <div className="w-full overflow-x-auto">
      <h2 className="ml-8 text-lg font-semibold mb-4 uppercase tracking-wide">Our latest picks</h2>
      <div className="ml-8 border-b w-24 border-black"></div>
      <div className="flex space-x snap-x snap-mandatory overflow-x-scroll no-scrollbar">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-92 h-auto flex flex-col justify-center p-4"
            >
              <img
                src={product.productImage || "https://via.placeholder.com/400x800"}
                alt={product.title}
                className="w-full h-96 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.price}</p>
              <p>
                <a href="#" className="text-blue-500 hover:underline">View Details</a>
              </p>
            </div>
          ))
        ) : (
          <p>No products found...</p>
        )}
      </div>
    </div>
  );
}