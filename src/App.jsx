import 'App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Header, Keyboard, Matrix } from 'components';
import { useKeyboard } from 'hooks';

export const App = () => {
  const { keyboardHandler } = useKeyboard();
  const { isDarkmodeEnabled } = useSelector((store) => store.wordle);

  useEffect(() => {
    window.addEventListener('keyup', keyboardHandler);
  }, [keyboardHandler]);

  return (
    <div data-darkmode_enabled={isDarkmodeEnabled} className='App'>
      <Toaster />
      <Header />
      <Matrix />
      <Keyboard />
    </div>
  );
};
