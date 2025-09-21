import React, { useState } from "react";
import "./Clothing.css";

// 👕 Product images (must exist in /src/assets)
import narutoHoodie from "/Naruto hoodie.jpg";
import blueLockHoodie from "/Blue Lock Hoodie.webp";
import demonSlayerHoodie from "/Demon Slayer Hoodie.jpg";
import itachiHoodie from "/Itachi hoodie.webp";
import minatoHoodie from "/Minato hoodie.jpg";
import blueLockGym from "/Blue Lock.jpg";
import sealHoodie from "/Seal Hoodie.jpg";
import uchihaTshirt from "/Uchuha.webp";

// 🛒 Cart Icon
import cartIcon from "/Cart.webp";

export default function Clothing() {
  const products = [
    { id: 1, name: "Naruto Hoodie", price: 39.99, image: narutoHoodie },
    { id: 2, name: "Blue Lock Hoodie", price: 59.99, image: blueLockHoodie },
    { id: 3, name: "Demon Slayer Hoodie", price: 25.99, image: demonSlayerHoodie },
    { id: 4, name: "Itachi Hoodie", price: 30.5, image: itachiHoodie },
    { id: 5, name: "Minato Hoodie", price: 45.23, image: minatoHoodie },
    { id: 6, name: "Blue Lock Gym Sweater", price: 39.21, image: blueLockGym },
    { id: 7, name: "Seal Hoodie", price: 26.34, image: sealHoodie },
    { id: 8, name: "Uchiha T-Shirt", price: 45, image: uchihaTshirt },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = 1;
      return acc;
    }, {})
  );

  const [cart, setCart] = useState([]);

  const increase = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  const addToCart = (item) => {
    const qty = quantities[item.id];
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="clothing-page">
      <h1>Anime Clothing Store</h1>

      {/* 🛒 Cart Icon */}
      <div className="cart-icon-container">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>

      {/* 👕 Product grid */}
      <div className="clothing-grid">
        {products.map((item) => (
          <div key={item.id} className="clothing-card">
            <div className="image-wrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="card-body">
              <h3 className="product-name">{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>

              <div className="quantity">
                <button onClick={() => decrease(item.id)}>-</button>
                <span className="qty">{quantities[item.id]}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              <button className="add-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Preview */}
      <div className="cart-preview">
        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((c) => (
              <li key={c.id}>
                {c.name} × {c.qty} — ${Number(c.price * c.qty).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}