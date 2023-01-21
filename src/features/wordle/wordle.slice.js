import confetti from 'canvas-confetti';
import { toast } from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import { confettiColors, dictionary } from 'constants';

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

const toastOptions = { duration: 1200 };

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
      const { word, isWordGuessed, guessCounter, guesses, showResultOfGuess } =
        state;
      const currentGuess = guesses[guessCounter];

      if (currentGuess?.length === 5 && guessCounter < 6) {
        if (currentGuess.toLowerCase() in dictionary) {
          showResultOfGuess.push(guessCounter + 1);
          state.guessCounter += 1;
        } else {
          toast('Not in word list', toastOptions);
        }

        if (currentGuess === word) {
          confetti({ particleCount: 500, spread: 180, confettiColors });
          state.isWordGuessed = true;
        }
      }

      if (currentGuess?.length !== 5 && !isWordGuessed) {
        toast('Not enough letters', toastOptions);
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
