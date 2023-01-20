import { withTheme } from 'libs';

export const Sun = withTheme(({ isDarkmodeEnabled }) => {
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
        d='M12 18a6 6 0 100-12 6 6 0 000 12zm10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1'
      ></path>
    </svg>
  );
});
