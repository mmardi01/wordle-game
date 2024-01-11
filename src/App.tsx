import { useEffect, useState } from "react";
import "./App.css";
import Guess from "./components/Guess";
import KeyBoard from "./components/KeyBoard";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { addGuess } from "./features/gameSlice";
import { dictionary } from "./data";
import { checkGuess } from "./Wordl";
import Congrats from "./components/Congrats";
import Lose from "./components/Lose";

function App() {
  const dispatch = useAppDispatch();

  const [currentGuess, setCurrnetGuess] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [displayWIn, setDisplayWin] = useState(false);
  const [displayLose, setDisplayLose] = useState(false);

  const game = useAppSelector((state) => state.game);

  const sumbitGuess = () => {
    const result = checkGuess(currentGuess.toLowerCase(), game.answer);
    dispatch(addGuess({ guess: currentGuess, result: result }));
    setCurrnetGuess("");
    setTimeout(() => {
      if (game.answer === currentGuess)
        setDisplayWin(true);
    },700)
    setTimeout(() => {
      if (game.gussesLeft === 1 && game.answer !== currentGuess)
        setDisplayLose(true);
    },700)
  };

  let guessesLeft = Array(
    game.gussesLeft - 1 >= 0 ? game.gussesLeft - 1 : 0
  ).fill(0);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    setIsValid(true);
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrnetGuess((prev) => prev + key);
    }
    if (key === "Backspace") setCurrnetGuess((prev) => prev.slice(0, -1));
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        setIsValid(false);
      }
      if (!dictionary.includes(currentGuess.toLowerCase())) {
        setIsValid(false);
        return;
      }
      sumbitGuess();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return (
    <div className="w-screen h-screen flex justify-center bg-[#262B3C] items-center">
      <div className=" flex flex-col items-center gap-10">
        <div className="bg-[#dadce008] w-[420px] h-[55px] rounded-xl flex items-center justify-center">
          <h1 className="font-bold text-4xl text-white">Wordle Game</h1>
        </div>
        <div className="flex flex-col gap-2">
          {game.history.map((guess, index) => (
            <Guess
              key={index}
              word={guess}
              valid={true}
              active={false}
              result={game.results[index]}
            />
          ))}
          {game.gussesLeft > 0 ? (
            <Guess
              word={currentGuess}
              valid={isValid}
              active={true}
              result={[]}
            />
          ) : null}
          {guessesLeft.map((_, index) => (
            <Guess
              key={index}
              word={""}
              valid={true}
              active={false}
              result={[]}
            />
          ))}
        </div>
        <KeyBoard
          currentGuess={currentGuess}
          setIsValid={setIsValid}
          setCurrnetGuess={setCurrnetGuess}
          setDisplayWin={setDisplayWin}
          setDisplayLose={setDisplayLose}
        />
      </div>
      {
        displayWIn ?
        <Congrats /> 
        : 
        null
      }
      {
        displayLose ?
        <Lose />
        : 
        null
      }
    </div>
  );
}

export default App;
