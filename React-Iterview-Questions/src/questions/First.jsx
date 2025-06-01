//Update DOM Based on User Input (Live Preview)

import { useState } from "react";

export function First() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Live Preview: {name}</p>
    </div>
  );
}
