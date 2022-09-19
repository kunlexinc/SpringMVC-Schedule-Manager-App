import React, { useState } from "react";
import "./Counter.css";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + props.by)}>1+</button>
      <span>{count}</span>

      
    </div>
  );
}

export default Counter;
