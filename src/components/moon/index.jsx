import { withTheme } from 'libs';

export const Moon = withTheme(({ isDarkmodeEnabled }) => {
  const stroke = isDarkmodeEnabled ? '#FFF' : '#000';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      fill='none'
      strokeWidth='1.5'
      color='#000'
      viewBox='0 0 24 24'
    >
      <path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z'
      ></path>
    </svg>
  );
});
