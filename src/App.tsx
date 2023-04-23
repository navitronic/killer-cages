import React, { ChangeEvent, useContext, useState } from 'react';
import { combinations, range } from './utils';
import { DisplayOptions, DisplayOptionsContext } from './context/DisplayOptionsContext';

interface CombinationProps {
  total: number;
  size: number;
  exclusions: number[];
}

function Combination(props: CombinationProps) {
  const { total, size, exclusions } = props;
  return (
    <div>
      {combinations(total, size, exclusions).map((combination, i) => (
        <div key={`options-${i}`}>
          {combination.map((number, ii) => (
            <NumberTile num={number} key={`option-${i}-${ii}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

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

function CombinationRange(props: CombinationProps) {
  const { total, size, exclusions } = props;
  return (
    <div>
      {combinations(total, size, exclusions).map((combination, i) => (
        <div key={`options-${i}`}>
          {range(1, 9).map((number, ii) => (
            <NumberTile key={`option-${i}-${ii}`} num={number} isDisabled={!combination.includes(number)} />
          ))}
        </div>
      ))}
    </div>
  );
}

function excStrToArr(excStr: string): number[] {
  return excStr
    .split(' ')
    .map((n) => Number(n))
    .filter((value) => value >= 1 && value <= 9);
}

function displayCombination(total: number, size: number, exclusions: number[], displayAll: boolean) {
  if (displayAll) {
    return <CombinationRange total={total} size={size} exclusions={exclusions} />;
  }

  return <Combination total={total} size={size} exclusions={exclusions} />;
}

function InnerApp() {
  const [total, setTotal] = useState<number>(10);
  const [size, setSize] = useState<number>(3);
  const [excStr, setExcStr] = useState<string>('');

  const displayOptions: DisplayOptions = useContext(DisplayOptionsContext);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    displayOptions.setShowAll(e.target.checked);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-10">Killer Cage Calculator 🧮</h1>
      <div className="text-3xl mb-20">
        <div>
          <label>
            Total:
            <input className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" type="number" max={45} min={1} name={'total'} value={total ?? ''} onChange={(e) => setTotal(Number(e.target.value))} />
          </label>
          <label>
            Size:
            <input className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" type="number" max={9} min={1} name={'size'} value={size ?? ''} onChange={(e) => setSize(Number(e.target.value))} />
          </label>
          <label>
            Exclusions:
            <input className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" type="text" name={'exclusions'} value={excStr ?? ''} onChange={(e) => setExcStr(e.target.value)} placeholder="Eg. 1 5" />
          </label>
        </div>
        <div className="text-base">
          <label>
            <input type="checkbox" checked={displayOptions.showAll} onChange={handleCheckboxChange} className="mr-1" />
            Show all numbers
          </label>
        </div>
      </div>
      {displayCombination(total, size, excStrToArr(excStr), displayOptions.showAll)}
    </div>
  );
}

export default InnerApp;
