import confetti from 'canvas-confetti';
import { createSlice } from '@reduxjs/toolkit';
import { confettiColors } from 'constants';

const name = 'wordle';

const initialState = {
  word: 'SLICE',
  guessCounter: 0,
  guesses: Array.from({ length: 6 }, () => ''),
  showResultOfGuess: [],
  isWordGuessed: false,
  isDarkmodeEnabled:
    JSON.parse(localStorage.getItem('wordle-darkmode-enabled')) ?? false,
};

const wordleSlice = createSlice({
  name,
  initialState,
  reducers: {
    appendKeyToCurrentGuesss: (state, { payload }) => {
      const { guessCounter, guesses, isWordGuessed } = state;
      const currentGuess = guesses[guessCounter];
      if (currentGuess?.length < 5 && !isWordGuessed) {
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
      const { word, guessCounter, guesses, showResultOfGuess } = state;
      const currentGuess = guesses[guessCounter];
      if (currentGuess?.length === 5 && guessCounter < 6) {
        showResultOfGuess.push(guessCounter + 1);
        state.guessCounter += 1;
        if (currentGuess === word) {
          confetti({ particleCount: 500, spread: 180, confettiColors });
          state.isWordGuessed = true;
        }
      }
    },
    toggleTheme: (state, _) => {
      const { isDarkmodeEnabled } = state;
      localStorage.setItem('wordle-darkmode-enabled', !isDarkmodeEnabled);
      state.isDarkmodeEnabled = !isDarkmodeEnabled;
    },
  },
});

export const {
  appendKeyToCurrentGuesss,
  removeLastLetterOfCurrentGuess,
  submitCurrentGuess,
  toggleTheme,
} = wordleSlice.actions;

export const wordleReducer = wordleSlice.reducer;
