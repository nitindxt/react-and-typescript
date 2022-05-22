import { useState } from "react";
import { questions } from "./questions";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = useState(true);
  const [buttonText, setButtonText] = useState("Reveal");

  const toggle = () => {
    toggleHidden(!isHidden);
    if (buttonText === "Reveal") setButtonText("Hide");
    else if (buttonText === "Hide") setButtonText("Reveal");
    console.log("hi");
  };
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${isHidden ? "blurred" : "visible"}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={toggle}>{buttonText}</button>
      </footer>
    </article>
  );
};

export const App = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};
