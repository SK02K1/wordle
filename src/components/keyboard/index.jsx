import { useKeyboard } from 'hooks';
import { keys } from 'constants';

export const Keyboard = () => {
  const { keyboardHandler } = useKeyboard();
  return (
    <div className='keyboard'>
      {keys.map((row) => {
        return (
          <div className='row' key={row.join()}>
            {row.map((key) => {
              return (
                <button
                  onClick={() => keyboardHandler({ key })}
                  className='btn-key'
                  key={key}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
