import { useReducer } from "react";

type actions = {
  type: "Increment" | "Reset" | "Decrement";
};

type state = {
  count: number;
};

const countReducer = (state: state, action: actions): state => {
  if (action.type === "Increment") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "Decrement") {
    return {
      count: state.count - 1,
    };
  }

  if (action.type === "Reset") {
    return {
      count: 0,
    };
  }
  return state; //this or 👇🏻
  //throw Error("Unknown action.");
};

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, { count: 0 });
  const increment = () => {
    dispatch({ type: "Increment" });
  };
  const reset = () => {
    dispatch({ type: "Reset" });
  };
  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count.count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const App = () => <Counter />;

export default App;
