

function ProductCard({title, price, category}) {
    return (<div className="product-card">
            <div className="product-image">
                <div style={{ width: '200px', height: '200px', backgroundColor: 'rgb(240, 240, 240)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                📦
                </div>
            </div>
            <div className="product-info">
                {/* Vill ändra på title */}
                <h3>{title}</h3> 
                {/* Vill ändra på price */}
                <p className="price">${price}</p>
                {/* Vill ändra på category */}
                <p className="category">{category}</p>
                <button>Add to Cart</button>
            </div>
        </div>);
}

export default ProductCard;