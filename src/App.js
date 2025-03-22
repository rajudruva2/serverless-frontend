
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

// Import images
import jeansImage from "./assets/jeans.jpg";
import tshirtImage from "./assets/tshirt.jpg";
import sareeImage from "./assets/saree.jpg";
import pf1 from "./assets/photo-frame-1.jpg";
import photo2h from "./assets/photo2h.jpg";

const products = [
  { id: 1, name: "T-Shirt", price: 299, image: tshirtImage },
  { id: 2, name: "photo-frame1", price: 499, image: jeansImage },
  { id: 3, name: "yellow-Tshirt", price: 100, image: sareeImage },
  { id: 5, name: "photo-frame2", price: 5000, image: pf1 },
  { id: 4, name: "premium-dress", price: 100000, image: photo2h },
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
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Store Page */}
          <Route
            path="/"
            element={
              <>
                <h1>Online Clothing Store</h1>
                <div className="products">
                  {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                  ))}
                </div>
                <Cart cart={cart} removeFromCart={removeFromCart} />
                <button className="checkout">Checkout</button>
              </>
            }
          />

          {/* Profile Page - ADDED CONDITIONAL NAVIGATION */}
          <Route
            path="/profile"
            element={
              <>
                <h1>Profile Page</h1>
                <ProfilePage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


