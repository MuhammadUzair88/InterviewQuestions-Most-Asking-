//Real-Time Form Validation With Dynamic Error Message

import React from "react";
import { useState } from "react";

const Second = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const validate = (value) => {
    setEmail(value);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => validate(e.target.value)}
        placeholder="Enter email"
      />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Second;
