import { UsedLetter } from "./features/gameSlice";

export const CORRECT = "C";
export const INCORRECT = "I";
export const ALMOST = "A";
const EMPTY = "*";

export type LetterResult = typeof CORRECT | typeof INCORRECT | typeof ALMOST;
export type GuessResult = LetterResult[];

export const checkGuess = (guess: string, answer: string): GuessResult => {
  const result: GuessResult = [];
  const guessArray = guess.split("");
  const answeArray = answer.split("");

  for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i] === answeArray[i]) {
      guessArray[i] = EMPTY;
      answeArray[i] = EMPTY;
      result[i] = CORRECT;
    }
  }

  for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i] === EMPTY) continue;
    if (answeArray.includes(guessArray[i])) {
      result[i] = ALMOST;
      answeArray[answeArray.indexOf(guessArray[i])] = EMPTY;
    } else {
      result[i] = INCORRECT;
    }
  }

  return result;
};

export const addUsedLetters = (guess: string, result:GuessResult,resultHistory:UsedLetter[]): UsedLetter[] => {

  const used : UsedLetter[] = [];

  result.forEach((r,i) => {
    if (!resultHistory.length || resultHistory.find(l => l.letter === guess[i] && l.result !== 'C'))
      used.push({ letter:guess[i], result:r  })
    else if(!resultHistory.find(l => l.letter === guess[i]))
      used.push({ letter:guess[i], result:r  })
  })
  return used;
};
