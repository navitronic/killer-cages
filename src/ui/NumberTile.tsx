import React from 'react';

interface NumberTileProps {
  num: number;
  isDisabled?: boolean;
}

const NumberTile = ({ num, isDisabled }: NumberTileProps) => {
  let buttonClass = 'w-20 text-center border-4 p-3 m-1 rounded-xl font-bold text-3xl';

  if (isDisabled) {
    buttonClass += ' bg-gray-300 border-gray-200 text-gray-400';
  } else {
    buttonClass += ' bg-blue-300 border-blue-200';
  }

  return (
    <button disabled={isDisabled} className={buttonClass}>
      {num}
    </button>
  );
};

export default NumberTile;
