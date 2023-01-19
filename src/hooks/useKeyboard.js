import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  appendKeyToCurrentGuesss,
  removeLastLetterOfCurrentGuess,
  submitCurrentGuess,
} from 'features';

export const useKeyboard = () => {
  const dispatch = useDispatch();

  const keyboardHandler = useCallback(
    ({ key }) => {
      if (/^[A-Za-z]$/.test(key)) {
        dispatch(appendKeyToCurrentGuesss({ key: key.toUpperCase() }));
      }
      if (key === 'Backspace' || key === '⌫') {
        dispatch(removeLastLetterOfCurrentGuess());
      }
      if (key.toUpperCase() === 'ENTER') {
        dispatch(submitCurrentGuess());
      }
    },
    [dispatch]
  );

  return { keyboardHandler };
};
