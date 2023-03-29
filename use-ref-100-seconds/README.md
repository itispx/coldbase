# REACT USE REF IN 100 SECONDS

Let’s take our counter example and say we want to display the amount of times the counter has been updated. We can do that with the `useState` hook

```js
const App: React.FC = () => {
  const [count, setCount] = useState(3);
  const [countUpdates, setCountUpdates] = useState(0);

  function incrementHandler(): void {
    setCount((prev) => prev + 1);
    setCountUpdates((prev) => prev + 1);
  }

  function decrementHandler(): void {
    setCount((prev) => prev - 1);
    setCountUpdates((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      <span>{count}</span>
      <button onClick={incrementHandler}>+</button>

      <h1>Count has been updated {countUpdates} times</h1>
    </div>
  );
};
```

However, this means that everytime we update our counter, the component will re-render twice. To fix this we can use the `useRef` hook. The `useRef` hook will keep persistence between component renders, that way we can know how many times the counter has been updated without triggering a re-render. We use the refs `current` method to get access and modify the value.

```js
const [count, setCount] = useState(3);

const countRef = useRef(0);

  	function incrementHandler(): void {
 	   setCount((prev) => prev + 1);
   	   countRef.current++;
 	 }

 	 function decrementHandler(): void {
 	   setCount((prev) => prev - 1);
 	   countRef.current++;
 	 }

  return (
    <div>
      <div className="counter-container">
        <button onClick={decrementHandler}>-</button>
        <span>{count}</span>
  	      <button onClick={incrementHandler}>+</button>
   	   </div>

 	     <h1>Count has been updated {countRef.current} times</h1>
    </div>
  );
};
```

You can also use `useRef` to get a reference to a DOM element and manipulate it directly. Here we create a ref called `elementRef` using `useRef`, we then pass this ref to the ref attribute of a `<h2>` element and now every time we increment or decrement the count we can display that in the UI.

```js
const [count, setCount] = useState(3);

const countRef = useRef(0);

const elementRef = (useRef < HTMLHeadingElement) | (null > null);

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
```

Before we update the `textContent` of the h2 element, we first need to check if `elementRef.current` is not null and it holds the reference to the h2 element. This is necessary because, when the component mounts initially, `elementRef.current` is null. If we tried to access `textContent` directly without checking that the reference is not null, we would get a runtime error.

In summary, useRef is a hook that provides a way to keep track of mutable values that don't trigger a re-render. It's useful for manipulating the DOM, keeping track of values between renders, and other scenarios where you need a mutable reference that persists between renders.
