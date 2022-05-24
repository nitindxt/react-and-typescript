import { useState } from "react";
import { fetchDogFacts, DogFactType } from "./dog-facts";

type FormProps = {
  onSubmit: (noOfFacts: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [noOfFacts, setNoOfFacts] = useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(noOfFacts);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={noOfFacts}
          min="1"
          max="10"
          id="number-of-facts"
          onChange={(e) => {
            setNoOfFacts(+e.target.value);
          }}
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const App = () => {
  let [facts, setFacts] = useState<DogFactType[]>([]);

  const handleSubmit = (noOfFacts: number) => {
    fetchDogFacts(noOfFacts).then((facts) => setFacts(facts));
  };

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact.fact}></Fact>
        ))}
      </section>
    </main>
  );
};

export default App;
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
