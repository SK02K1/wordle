import { useSelector } from 'react-redux';

export const Matrix = () => {
  const { guesses } = useSelector((store) => store.wordle);
  return (
    <div className='matrix'>
      {guesses.map((guess, guessIndex) => {
        return (
          <div className='row' key={`row-${guessIndex + 1}`}>
            {[...guess.padEnd(5, ' ')].map((letter, letterIndex) => {
              return (
                <div className='letter' key={`letter-${letterIndex + 1}`}>
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
