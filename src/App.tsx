import React, { ChangeEvent, useContext, useState } from 'react';
import { DisplayOptions, DisplayOptionsContext } from './context/DisplayOptionsContext';
import CombinationRange from './ui/CombinationRange';
import Combination from './ui/Combination';

function numStrToArr(excStr: string): number[] {
  return excStr
    .split(' ')
    .map((n) => Number(n))
    .filter((value) => value >= 1 && value <= 9);
}

function displayCombination(total: number, size: number, inclusions: number[], exclusions: number[], groupNum: boolean) {
  if (!groupNum) {
    return <CombinationRange total={total} size={size} inclusions={inclusions} exclusions={exclusions} />;
  }

  return <Combination total={total} size={size} inclusions={inclusions} exclusions={exclusions} />;
}

function InnerApp() {
  const [total, setTotal] = useState<number>(10);
  const [size, setSize] = useState<number>(3);
  const [incStr, setIncStr] = useState<string>('');
  const [excStr, setExcStr] = useState<string>('');

  const displayOptions: DisplayOptions = useContext(DisplayOptionsContext);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    displayOptions.setGroupNum(e.target.checked);
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
            Include:
            <input size={6} className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" type="text" name={'inclusions'} value={incStr ?? ''} onChange={(e) => setIncStr(e.target.value)} placeholder="Eg. 1 5" />
          </label>
          <label>
            Exclude:
            <input size={6} className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" type="text" name={'exclusions'} value={excStr ?? ''} onChange={(e) => setExcStr(e.target.value)} placeholder="Eg. 1 5" />
          </label>
        </div>
        <div className="text-base">
          <label>
            <input type="checkbox" checked={displayOptions.groupNum} onChange={handleCheckboxChange} className="mr-1" />
            Group numbers
          </label>
        </div>
      </div>
      {displayCombination(total, size, numStrToArr(incStr), numStrToArr(excStr), displayOptions.groupNum)}
    </div>
  );
}

export default InnerApp;
