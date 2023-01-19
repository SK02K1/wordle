import { createSlice } from '@reduxjs/toolkit';

const name = 'wordle';

const initialState = {
  word: 'SLICE',
  guessCounter: 0,
  guesses: Array.from({ length: 6 }, () => ''),
  showResultOfGuess: [],
};

const wordleSlice = createSlice({
  name,
  initialState,
  reducers: {
    appendKeyToCurrentGuesss: (state, { payload }) => {
      const { guessCounter, guesses } = state;
      const currentGuess = guesses[guessCounter];
      if (currentGuess?.length < 5) {
        guesses[guessCounter] = currentGuess + payload.key;
      }
    },
    removeLastLetterOfCurrentGuess: (state, _) => {
      const { guessCounter, guesses } = state;
      const currentGuess = guesses[guessCounter];
      if (guessCounter < 6) {
        guesses[guessCounter] = currentGuess.slice(0, -1);
      }
    },
    submitCurrentGuess: (state, _) => {
      const { guessCounter, guesses, showResultOfGuess } = state;
      const currentGuess = guesses[guessCounter];
      if (currentGuess?.length === 5 && guessCounter < 6) {
        showResultOfGuess.push(guessCounter + 1);
        state.guessCounter += 1;
      }
    },
  },
});

export const {
  appendKeyToCurrentGuesss,
  removeLastLetterOfCurrentGuess,
  submitCurrentGuess,
} = wordleSlice.actions;

export const wordleReducer = wordleSlice.reducer;
