import "./App.css";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
function App() {
  const [thing, setThing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setThing(e.target.value);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        <h1 className="text-3xl sm:text-6xl font-bold">
          Write your bad thoughts
        </h1>
        <form
          className="flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-2 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
            type="text"
            placeholder="Type your thoughts here..."
            autofocus
            maxLength="64"
            value={thing}
            onInput={handleInput}
          />
          <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none focus: text-text-600 hover:text-teal-600">
            <ArrowCircleRightIcon className="h-12 w-12 pointer-events-none" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
