import React, { useEffect, useState } from 'react';
import { range, combinations, numStrToArr, ensureUniqueNumbers } from '../utils';
import NumberTile from './NumberTile';

interface CageProps {
  total: number;
  size: number;
  exclusions?: string;
  inclusions?: string;
}

export default function Cage({ total, size, exclusions = '', inclusions = '' }: CageProps) {
  const excludedNumbers = ensureUniqueNumbers(numStrToArr(exclusions));
  const includedNumbers = ensureUniqueNumbers(numStrToArr(inclusions));
  const conflictingNumbers = includedNumbers.filter((number) => excludedNumbers.includes(number));
  const comboList = conflictingNumbers.length > 0 ? [] : combinations(total, size, includedNumbers, excludedNumbers);

  const [excludedIndexes, setExcludedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setExcludedIndexes([]);
  }, [total, size, inclusions, exclusions]);

  return (
    <>
      <h2 className="text-2xl font-bold my-5 px-3">
        {size} cell, {total} cage
      </h2>
      {conflictingNumbers.length > 0 && <p className="px-3 text-red-700">Numbers cannot be both required and disallowed: {conflictingNumbers.join(', ')}</p>}
      <div>
        {comboList.map((combination, i) => (
          <button
            aria-label={`Toggle combination ${combination.join(', ')}`}
            aria-pressed={excludedIndexes.indexOf(i) > -1}
            className={excludedIndexes.indexOf(i) > -1 ? 'block opacity-20' : 'block'}
            key={`cage-option-${i}`}
            onClick={() => {
              setExcludedIndexes((indexes) => (indexes.includes(i) ? indexes.filter((index) => index !== i) : [...indexes, i]));
            }}
            type="button"
          >
            {range(1, 9).map((number, ii) => (
              <NumberTile key={`option-${i}-${ii}`} num={number} isDisabled={!combination.includes(number)} />
            ))}
          </button>
        ))}
      </div>
    </>
  );
}
