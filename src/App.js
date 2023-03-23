import "./App.css";

import { useState } from "react";
import CustomForm from "./compoonents/CustomForm";

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
      </div>
    </main>
  );
}

export default App;
