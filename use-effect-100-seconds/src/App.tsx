import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    console.log("count:", count);

    return () => {
      console.log("cleaning up...");
    };
  }, [count]);

  function incrementHandler(): void {
    setCount((prev) => prev + 1);
  }

  function decrementHandler(): void {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      <span>{count}</span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

export default App;
