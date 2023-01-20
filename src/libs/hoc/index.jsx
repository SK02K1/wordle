import { useSelector } from 'react-redux';

export const withTheme = (Icon) => {
  return (props) => {
    const { isDarkmodeEnabled } = useSelector((store) => store.wordle);
    return <Icon isDarkmodeEnabled={isDarkmodeEnabled} {...props} />;
  };
};
