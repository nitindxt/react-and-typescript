import { useReducer } from "react";

type actions = {
  type: "Increment" | "Reset" | "Decrement";
};

type state = {
  count: number;
};

const countReducer = (state: state, action: actions) => {
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
      count: (state.count = 0),
    };
  }

  throw Error("Unknown action.");
};

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count.count}</p>
      <section className="controls">
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Reset" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          Decrement
        </button>
      </section>
    </main>
  );
};

const App = () => <Counter />;

export default App;
