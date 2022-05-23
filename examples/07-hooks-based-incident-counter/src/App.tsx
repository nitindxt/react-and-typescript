import { useState } from "react";
type IncidentProps = {
  incident: string;
};
const Counter = ({ incident }: IncidentProps) => {
  let [count, setCount] = useState(0);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount((count = count + 1))}>Increment</button>
        <button onClick={() => setCount((count = 0))}>Reset</button>
        <button onClick={() => setCount((count = count - 1))}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            onChange={(event) => setCount((count = +event.target.value))}
            value={count}
            min={0}
            max={9999999}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const App = () => <Counter incident="Coffee Spill" />;

export default App;
