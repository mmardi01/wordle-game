import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GuessResult } from "../Wordl";
import { RootState } from "../store";

export type Game = {
  answer: string;
  allGusses: string[];
  results: GuessResult[];
  gussesLeft: number;
  dictionary: string[];
  wordLength: number;
};

const initialState: Game = {
  answer: "",
  allGusses:[],
  results:[],
  gussesLeft:6,
  dictionary:[],
  wordLength:4
};


export const gameSlice = createSlice({
  name:'game',
  initialState,
  reducers:{
    createGame: (state, action : PayloadAction<Game>) => {
      state = action.payload;
    },
    addGuess:(state, action: PayloadAction<{guess:string; result:GuessResult}>) => {
      state.gussesLeft--;
      state.results.push(action.payload.result);
      state.allGusses.push(action.payload.guess);
    }
  }
})

export const { createGame, addGuess,  } = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default gameSlice.reducer