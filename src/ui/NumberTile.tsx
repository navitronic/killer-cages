import React from 'react';

interface NumberTileProps {
  num: number;
  isDisabled?: boolean;
}

const buttonClass = (color: string, textColor: string) => `text-center border-4 px-4 py-2 m-1 rounded-2xl font-bold text-2xl bg-${color}-300 border-${color}-200 text-${textColor}-400`;

const NumberTile = ({ num, isDisabled }: NumberTileProps) => (
  <button disabled={isDisabled} className={buttonClass(!isDisabled ? 'blue' : 'gray', !isDisabled ? 'black' : 'gray')}>
    {num}
  </button>
);
export default NumberTile;
