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
  const [ableTosubmit, setAbleTosubmit] = useState(true);
  const [error, setError] = useState("");
  const [displayeError, setDisplayError] = useState(false);
  const game = useAppSelector((state) => state.game);

  const sumbitGuess = () => {
    // check the correct letters
    const result = checkGuess(currentGuess.toLowerCase(), game.answer);
    dispatch(addGuess({ guess: currentGuess, result: result }));
    setCurrnetGuess("");
    setAbleTosubmit(false);

    setTimeout(() => {
      setAbleTosubmit(true);
    }, 800);

    setTimeout(() => {
      if (game.answer === currentGuess) setDisplayWin(true);
    }, 700);

    setTimeout(() => {
      if (game.gussesLeft === 1 && game.answer !== currentGuess)
        setDisplayLose(true);
    }, 700);
  };
  let guessesLeft = Array(
    game.gussesLeft - 1 >= 0 ? game.gussesLeft - 1 : 0
  ).fill(0);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    setIsValid(true);
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5 && ableTosubmit) {
      setCurrnetGuess((prev) => prev + key);
    }
    if (key === "Backspace") setCurrnetGuess((prev) => prev.slice(0, -1));
    if (key === "Enter" && ableTosubmit) {
      if (currentGuess.length !== 5) {
        setError("Too short");
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 1000);
        setIsValid(false);
        return;
      }
      if (!dictionary.includes(currentGuess.toLowerCase())) {
        setError("");
        setError("Word not found");
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 1000);
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
          <h1 className="font-bold text-4xl text-white">Lendstack Wordle</h1>
        </div>
        <div className="flex flex-col gap-2">
          {/*  previous guesses area */}
          {game.history.map((guess, index) => (
            <Guess
              key={index}
              word={guess}
              valid={true}
              active={false}
              result={game.results[index]}
            />
          ))}
          {/* new guess input */}
          {game.gussesLeft > 0 ? (
            <Guess
              word={currentGuess}
              valid={isValid}
              active={true}
              result={[]}
            />
          ) : null}

          {/* remaining attempts. */}
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
        {/* KeyBoard area */}
        <KeyBoard
          currentGuess={currentGuess}
          setIsValid={setIsValid}
          setCurrnetGuess={setCurrnetGuess}
          setDisplayWin={setDisplayWin}
          setDisplayLose={setDisplayLose}
        />
        {displayeError ? (
          <p className="bg-red-500 shadow-sm top-24 text-white absolute p-2 rounded-lg">
            {error}
          </p>
        ) : null}
      </div>
      {displayWIn ? <Congrats /> : null}
      {displayLose ? <Lose /> : null}
    </div>
  );
}

export default App;
