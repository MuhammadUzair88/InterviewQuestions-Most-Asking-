import { useState } from "react";

export function Third() {
  const [show, setShow] = useState(false);

  const sidebarStyle = {
    display: show ? "block" : "none",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ccc",
    width: "200px",
  };

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Sidebar</button>

      <div style={sidebarStyle}>Sidebar Content</div>
    </div>
  );
}
