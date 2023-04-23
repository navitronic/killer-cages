import { combinations, range } from '../utils';
import React from 'react';
import NumberTile from './NumberTile';

interface CombinationProps {
  total: number;
  size: number;
  inclusions: number[];
  exclusions: number[];
}

export default function Combination(props: CombinationProps) {
  const { total, size, inclusions, exclusions } = props;
  return (
    <div>
      {combinations(total, size, inclusions, exclusions).map((combination, i) => (
        <div key={`options-${i}`}>
          {combination.map((number, ii) => (
            <NumberTile num={number} key={`option-${i}-${ii}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
