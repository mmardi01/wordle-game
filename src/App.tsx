import { useEffect, useState } from "react";
import "./App.css";
import { checkGuess } from "./Wordl";
import Guess from "./components/Guess";
import KeyBoard from "./components/KeyBoard";

function App() {
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return (
    <div className="w-screen h-screen flex justify-center bg-[#262B3C] items-center">
      <div className=" flex flex-col items-center gap-10">
        <div className="bg-[#dadce008] w-[420px] h-[55px] rounded-xl flex items-center justify-center">
          <h1 className="font-bold text-4xl text-white">Wordle</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Guess word={"wordl"} />
          <Guess word={"wordl"} />
          <Guess word={"wordl"} />
          <Guess word={"wordl"} />
          <Guess word={"wordl"} />
          <Guess word={"wordl"} />
        </div>
        <KeyBoard />
      </div>
    </div>
  );
}

export default App;
