import React from "react";
import { useState } from "react";

const Fourth = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <input type={`${visible ? "text" : "password"}`} />
      <button onClick={() => setVisible((prev) => !prev)}>
        Click Here To See Password
      </button>
    </div>
  );
};

export default Fourth;
