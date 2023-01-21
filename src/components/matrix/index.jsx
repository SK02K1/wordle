import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetShakeRowIndex } from 'features';

export const Matrix = () => {
  const dispatch = useDispatch();
  const wordleData = useSelector((store) => store.wordle);
  const { word, guesses, showResultOfGuess, shakeRowIndex } = wordleData;

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetShakeRowIndex());
    }, 500);
  }, [shakeRowIndex, dispatch]);

  return (
    <div className='matrix'>
      {guesses.map((guess, guessIndex) => {
        return (
          <div
            data-shake_row={guessIndex === shakeRowIndex}
            className='row'
            key={`row-${guessIndex + 1}`}
          >
            {[...guess.padEnd(5, ' ')].map((letter, letterIndex) => {
              return (
                <div
                  data-show_result={showResultOfGuess.includes(guessIndex + 1)}
                  data-present_in_word={word.includes(letter)}
                  data-in_correct_position={word[letterIndex] === letter}
                  data-is_letter={letter !== ' '}
                  className='letter'
                  key={`letter-${letterIndex + 1}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
