
import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>rupee {product.price}</p> {/* Changed $ to "rupee" */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
