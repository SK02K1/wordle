import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'features';
import { Sun, Moon } from 'components';

export const Header = () => {
  const dispatch = useDispatch();
  const { isDarkmodeEnabled } = useSelector((store) => store.wordle);

  const themeIcon = isDarkmodeEnabled ? <Sun /> : <Moon />;

  const switchHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className='header'>
      <h1>शब्दle</h1>
      <div onClick={switchHandler} className='theme-icon'>
        {themeIcon}
      </div>
    </header>
  );
};
