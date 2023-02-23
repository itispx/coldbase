# REACT USE STATE IN 100 SECONDS

React useState in 100 seconds

So today we are going to be learning about React’s useState hook. You will want to use this hook whenever you have a value that needs to trigger a component re-render.

First, let’s implement a count component using let and see why it will not work. First let’s set up a component that displays the current value of count and a button to increase and decrease the value.

```js
const App: React.FC = () => {
  let count = 3;

  function incrementHandler(): void {
    count = count + 1;
  }

  function decrementHandler(): void {
    count = count - 1;
  }

  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      <span>{count}</span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};
```

As we can see, when we’re using let, the component will not trigger a re-render when the value changes. If we console.log the values we can see that the value of count is changing, but it is not showing in the UI.

Let’s fix this by using the useState hook. You can only use hooks inside a functional component and it needs to be at the component’s root level.

You can set the initial value like this `useState(3)` or pass in a function `useState(() => 3)`, this function will only run when the component renders for the first time.

To access and modify the state you need to use array destructuring where count is the variable that you can use to access the current state value and setCount is the variable you can use to modify the state value.

```js
const [count, setCount] = useState(3);
```

Now let’s fix our counter example. Similar to the initial state, you can also pass a function to setCount. When passing a function to setCount it gives you the previous state as a parameter. We are going to get the previous state and add 1 on increase and remove 1 on decrease.

```js
function incrementHandler(): void {
  setCount((prev) => prev + 1);
}

function decrementHandler(): void {
  setCount((prev) => prev - 1);
}
```

Now as we can see, the counter component is working perfectly because the UI updates every time the state changes.

If you are wondering why we can only use hooks at the component’s root level, it’s because when we use several useState hooks inside our component, React relies on the order in which hooks are called to figure out which piece of state corresponds to the right useState call. So if we render our hooks conditionally, React will not know what to return when there’s a missing hook.

```js
const condition = false;

if (condition) {
  const [state1, setState1] = useState(false);
}
```

Thank you for watching, and if you have any questions or feedback, please let me know in the comments.
