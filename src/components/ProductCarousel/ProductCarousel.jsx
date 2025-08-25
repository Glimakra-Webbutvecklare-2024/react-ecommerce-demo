export default function ProductCarousel({ products = [] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 snap-x snap-mandatory overflow-x-scroll no-scrollbar p-4">
       {products.length > 0 ? (
          products.map((product) => (
            <ProductCarousel
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
}