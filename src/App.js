import "./App.css";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
function App() {
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        <h1 className="text-3xl sm:text-6xl font-bold">
          Write your bad thoughts
        </h1>
        <form className="flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-2 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800">
          <input type="text" />
          <button>
            <ArrowCircleRightIcon className="h-12 w-12 pointer-events-none" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
