import { checkGuess } from "../Wordl";
import { dictionary } from "../data";
import { addGuess } from "../features/gameSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const querty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

type KeyBoardProps = {
  setCurrnetGuess: React.Dispatch<React.SetStateAction<string>>;
  currentGuess: string;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayWin: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayLose: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function KeyBoard({
  setCurrnetGuess,
  currentGuess,
  setIsValid,
  setDisplayLose,
  setDisplayWin,
}: KeyBoardProps) {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  const usedLetters = useAppSelector((state) => state.game.usedLetters);
  const sumbitGuess = () => {
    const result = checkGuess(currentGuess.toLowerCase(), game.answer);
    dispatch(addGuess({ guess: currentGuess, result: result }));
    setCurrnetGuess("");
    setTimeout(() => {
      if (game.answer === currentGuess) setDisplayWin(true);
    }, 700);
    setTimeout(() => {
      if (game.gussesLeft === 1 && game.answer !== currentGuess)
        setDisplayLose(true);
    }, 700);
  };

  const checkKey = (key: string) => {
    let result: string = "";
    usedLetters.forEach((l) => {
      if (l.letter === key)
        result =
          l.result === "C"
            ? "bg-[#6AAA64]"
            : l.result === "I"
            ? "bg-[#939B9F]"
            : l.result === "A"
            ? "bg-[#CEB02C]"
            : "";
    });
    return result;
  };

  const handleKeyBoardClick = (key: string) => {
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

  return (
    <div className="w-[480px] gap-2 bg-[#dadce008] rounded-[15px] p-3 flex flex-col items-center">
      <div className="flex gap-2">
        {querty[0].split("").map((letter, index) => (
          <div
            key={index}
            onClick={() => handleKeyBoardClick(letter)}
            className={`bg-[#565F7E] cursor-pointer w-[38px] ${checkKey(
              letter
            )}  active:scale-105 h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]`}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {querty[1].split("").map((letter, index) => (
          <div
            onClick={() => handleKeyBoardClick(letter)}
            className={`bg-[#565F7E] $ active:scale-105 ${checkKey(
              letter
            )}  cursor-pointer w-[38px] h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]`}
            key={index}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div
          onClick={() => handleKeyBoardClick("Enter")}
          className="bg-[#565F7E] active:scale-105 ${checkKey(letter)}  cursor-pointer h-[43px] text-white text-sm font-[500] px-2 capitalize flex justify-center items-center rounded-[4px]"
        >
          ENTER
        </div>
        {querty[2].split("").map((letter, index) => (
          <div
            onClick={() => handleKeyBoardClick(letter)}
            className={`bg-[#565F7E] cursor-pointer w-[38px] ${checkKey(
              letter
            )}  active:scale-105 h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]`}
            key={index}
          >
            {letter}
          </div>
        ))}
        <div
          onClick={() => handleKeyBoardClick("Backspace")}
          className="bg-[#565F7E] active:scale-105 cursor-pointer h-[43px] text-white text-sm font-[500] px-2 capitalize flex justify-center items-center rounded-[4px]"
        >
          DELETE
        </div>
      </div>
    </div>
  );
}
