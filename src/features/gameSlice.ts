import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GuessResult, addUsedLetters } from "../Wordl";
import { RootState } from "../store";
import { dictionary } from "../data";

export type UsedLetter = {
  letter: string;
  result: string;
};

export type Game = {
  answer: string;
  history: string[];
  results: GuessResult[];
  gussesLeft: number;
  dictionary: string[];
  wordLength: number;
  usedLetters: UsedLetter[];
};

const initialState: Game = {
  answer: dictionary[Math.floor(Math.random() * dictionary.length - 1)],
  history: [],
  results: [],
  gussesLeft: 6,
  dictionary: dictionary,
  wordLength: 5,
  usedLetters: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGuess: (
      state,
      action: PayloadAction<{ guess: string; result: GuessResult }>
    ) => {
      state.gussesLeft--;
      state.results.push(action.payload.result);
      state.history.push(action.payload.guess);
      state.usedLetters = [
        ...state.usedLetters,
        ...addUsedLetters(
          action.payload.guess.toLowerCase(),
          action.payload.result,
          state.usedLetters
        ),
      ];
    },
  },
});

export const { addGuess } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
