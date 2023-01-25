import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(3);

  function incrementHandler(): void {
    setCount((prev) => prev + 1);
  }

  function decrementHandler(): void {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      <text>{count}</text>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

export default App;
