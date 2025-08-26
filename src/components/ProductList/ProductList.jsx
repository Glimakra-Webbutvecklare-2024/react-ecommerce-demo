import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({products}) {
    return (<div className="product-list">
        {products.map( product => <ProductCard key={product.id} title={product.title} price={product.price} category={product.category} imageUrl={product.images[0]}/> )}
        </div>);
}

export default ProductList;