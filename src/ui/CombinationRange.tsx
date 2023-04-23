import { combinations, range } from '../utils';
import NumberTile from './NumberTile';
import React from 'react';

interface CombinationRangeProps {
  total: number;
  size: number;
  inclusions: number[];
  exclusions: number[];
}

export default function CombinationRange(props: CombinationRangeProps) {
  const { total, size, inclusions, exclusions } = props;
  return (
    <div>
      {combinations(total, size, inclusions, exclusions).map((combination, i) => (
        <div key={`options-${i}`}>
          {range(1, 9).map((number, ii) => (
            <NumberTile key={`option-${i}-${ii}`} num={number} isDisabled={!combination.includes(number)} />
          ))}
        </div>
      ))}
    </div>
  );
}
