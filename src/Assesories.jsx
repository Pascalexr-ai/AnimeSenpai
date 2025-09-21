import React, { useState } from "react";
import "./Assesories.css";
import cartIcon from "/Cart.webp";

export default function Assesories() {
  const products = [
    { id: 1, name: "Naruto Necklace", price: 15.99, image: "/Naruto Necklace.webp" },
    { id: 2, name: "Sharingan Ring", price: 12.5, image: "/Sharingan ring.webp" },
    { id: 3, name: "Akatsuki Bracelet", price: 18.99, image: "/Akatsuki bracelet.jpg" },
    { id: 4, name: "One Piece Keychain", price: 9.99, image: "/One piece keychain.webp" },
    { id: 5, name: "Blue Lock Wristband", price: 7.49, image: "/Blue.webp" },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = 1;
      return acc;
    }, {})
  );

  const [cart, setCart] = useState([]);

  const updateQty = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change),
    }));
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

  return (
    <div className="accessories-page">
      <h1 style={{color:'red'}}>Anime Accessories</h1>

      <div className="accessories-grid">
        {products.map((item) => (
          <div key={item.id} className="accessories-card">
            <div className="image-wrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="card-body">
              <h3 className="product-name">{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>

              <div className="quantity">
                <button onClick={() => updateQty(item.id, -1)}>-</button>
                <span className="qty">{quantities[item.id]}</span>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
              </div>

              <button className="add-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-preview">
        <h2>
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          ({cart.reduce((s, it) => s + it.qty, 0)})
        </h2>
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