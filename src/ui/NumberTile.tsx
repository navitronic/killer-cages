import React from 'react';

interface NumberTileProps {
  num: number;
  isDisabled?: boolean;
}

const buttonClass = (isDisabled: boolean) => {
  let classNames = 'min-w-[64px] text-center border-4 px-4 py-2 m-1 rounded-2xl font-bold text-2xl';

  if (isDisabled) {
    classNames += ' bg-gray-300 border-gray-200 text-gray-400';
  } else {
    classNames += ' bg-blue-300 border-blue-200';
  }

  return classNames;
};

const NumberTile = ({ num, isDisabled }: NumberTileProps) => <button className={buttonClass(!!isDisabled)}>{num}</button>;

export default NumberTile;
