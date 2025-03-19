import React, { useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./App.css";

const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "Pictures/jeans.jpg" },
  { id: 2, name: "Jeans", price: 40, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Jacket", price: 60, image: "https://via.placeholder.com/150" },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Online Clothing Store</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <button className="checkout">Checkout</button>
    </div>
  );
}

export default App;
