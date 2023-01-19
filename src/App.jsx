import 'App.css';
import { useEffect } from 'react';
import { Keyboard, Matrix } from 'components';
import { useKeyboard } from 'hooks';

export const App = () => {
  const { keyboardHandler } = useKeyboard();

  useEffect(() => {
    window.addEventListener('keyup', keyboardHandler);
  }, [keyboardHandler]);

  return (
    <div className='App'>
      <Matrix />
      <Keyboard />
    </div>
  );
};
