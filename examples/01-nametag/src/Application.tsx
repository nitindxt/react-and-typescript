/* added types */

type GreetingProps = {
    name: string;
    greetingText?: string;
}

const NameTag = ({name, greetingText="Hello !"}:GreetingProps) => {
    return (
      <main>
        <header>
          <h1>{greetingText}</h1>
          <p>my name is</p>
        </header>
        <section className="display-name">
          <p>{name}</p>
        </section>
        <footer />
      </main>
    );
  };
  
  const Application = () => <NameTag name="Nitin Dixit" greetingText="Good Evening!" />;
  
  export default Application;
  