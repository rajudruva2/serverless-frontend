import React from "react";

function Product({ product, addToCart }) {
  const handleAddToCart = () => {
    fetch("http://backend-app:8080/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then(() => addToCart(product))
      .catch((err) => console.error("Error adding to cart:", err));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p> {/* Changed "rupee" to ₹ for better formatting */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

