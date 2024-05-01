import React, { useEffect, useState } from 'react';
import { range, validCombinations } from '../utils';
import NumberTile from './NumberTile';

interface CageProps {
  total: number;
  size: number;
}

function toggleIndex(indexes: number[], index: number): number[] {
  const existingIndex = indexes.indexOf(index);

  if (existingIndex > -1) {
    indexes.splice(existingIndex, 1);
  } else {
    indexes.push(index);
  }

  return [...indexes];
}

export default function Cage({ total, size }: CageProps) {
  const combinations = validCombinations(total, size);

  const [excludedIndexes, setExcludedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setExcludedIndexes([]);
  }, [total, size]);

  return (
    <>
      <h2 className="text-2xl font-bold my-5 px-3">
        {size} cell, {total} cage
      </h2>
      <div>
        {combinations.map((combination, i) => (
          <div
            className={excludedIndexes.indexOf(i) > -1 ? 'opacity-20' : ''}
            key={`cage-option-${i}`}
            onClick={() => {
              setExcludedIndexes(toggleIndex(excludedIndexes, i));
            }}
          >
            {range(1, 9).map((number, ii) => (
              <NumberTile key={`option-${i}-${ii}`} num={number} isDisabled={!combination.includes(number)} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
