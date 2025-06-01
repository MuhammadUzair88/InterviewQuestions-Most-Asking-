// Using .reduce() to calculate total price

import React from "react";

function Seventh() {
  const cart = [
    { id: 1, name: "Apple", price: 1.5, quantity: 3 },
    { id: 2, name: "Banana", price: 0.75, quantity: 5 },
    { id: 3, name: "Orange", price: 1.25, quantity: 2 },
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemStyle = {
    padding: "8px",
    borderBottom: "1px solid #ccc",
  };

  const containerStyle = {
    maxWidth: "300px",
    margin: "20px auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
  };

  const totalStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h3>Shopping Cart</h3>
      {cart.map((item) => (
        <div key={item.id} style={itemStyle}>
          {item.name} - ${item.price} x {item.quantity}
        </div>
      ))}
      <p style={totalStyle}>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Seventh;
