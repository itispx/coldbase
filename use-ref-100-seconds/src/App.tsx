import React, { useState, useRef } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(3);

  const countRef = useRef(0);

  const elementRef = useRef<HTMLHeadingElement | null>(null);

  function incrementHandler(): void {
    setCount((prev) => prev + 1);
    countRef.current++;

    if (elementRef.current) {
      elementRef.current.textContent = "Count was incremented";
    }
  }

  function decrementHandler(): void {
    setCount((prev) => prev - 1);
    countRef.current++;

    if (elementRef.current) {
      elementRef.current.textContent = "Count was decremented";
    }
  }

  return (
    <div>
      <div className="counter-container">
        <button onClick={decrementHandler}>-</button>
        <span>{count}</span>
        <button onClick={incrementHandler}>+</button>
      </div>

      <h1>Count has been updated {countRef.current} times</h1>
      <h2 ref={elementRef}> </h2>
    </div>
  );
};

export default App;
