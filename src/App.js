import "./App.css";

import { useState } from "react";
import CustomForm from "./compoonents/CustomForm";
import OneThing from "./compoonents/OneThing";

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

function getSuccesMessage() {
  const message = [
    "Great job",
    "Up, up, and  up, up, and up",
    "Up, up, and up",
    "Do you feel great?",
  ];
  return message[Math.floor(Math.random() * message.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
  };

  const handleInput = (e) => {
    setThing(e.target.value);
  };

  const handleCompletedThing = async (e) => {
    e.target.setAttribute("disabled", true);
    setThing(getSuccesMessage(e));
    await jsConfetti.addConfetti({
      emojis: ["🦄", "💫", "🌸"],
    });
    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(true);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <>
            <CustomForm
              thing={thing}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
            />
          </>
        )}
        {!isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

export default App;
