import { createSlice } from '@reduxjs/toolkit';

const name = 'wordle';

const initialState = {
  word: 'SLICE',
  guessCounter: 0,
  guesses: Array.from({ length: 6 }, () => ''),
};

const wordleSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export const wordleReducer = wordleSlice.reducer;
