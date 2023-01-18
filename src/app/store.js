import { configureStore } from '@reduxjs/toolkit';
import { wordleReducer } from 'features';

export const store = configureStore({
  reducer: {
    wordle: wordleReducer,
  },
});
