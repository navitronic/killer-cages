import React from 'react';

interface NumberTileProps {
  num: number;
  isDisabled?: boolean;
}

const tileClass = (isDisabled: boolean) => {
  let classNames = 'inline-block min-w-8 sm:min-w-[64px] text-center border-4 px-2 sm:px-4 py-1 sm:py-2 m-0.5 sm:m-1 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl';

  if (isDisabled) {
    classNames += ' bg-gray-300 border-gray-200 text-gray-400';
  } else {
    classNames += ' bg-blue-300 border-blue-200';
  }

  return classNames;
};

const NumberTile = ({ num, isDisabled }: NumberTileProps) => (
  <span aria-hidden="true" className={tileClass(!!isDisabled)}>
    {num}
  </span>
);

export default NumberTile;
