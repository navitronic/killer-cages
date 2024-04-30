import { combinations, range } from '../utils';
import React from 'react';
import NumberTile from './NumberTile';

interface CombinationProps {
  total: number;
  size: number;
  inclusions: number[];
  exclusions: number[];
  group: boolean;
}

export default function Combination(props: CombinationProps) {
  const { total, size, inclusions, exclusions, group } = props;

  if (!group) {
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

  return (
    <div>
      {combinations(total, size, inclusions, exclusions).map((combination, i) => (
        <div key={`options-${i}`}>
          <div>
            {combination.map((number, ii) => (
              <NumberTile num={number} key={`option-${i}-${ii}`} />
            ))}
            {range(1, 9)
              .filter((n) => !combination.includes(n))
              .map((number, ii) => (
                <NumberTile num={number} key={`option-${i}-${ii}`} isDisabled={true} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
