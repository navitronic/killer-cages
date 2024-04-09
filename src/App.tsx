import React, { ChangeEvent, HTMLProps, useContext, useState } from 'react';
import { DisplayOptions, DisplayOptionsContext } from './context/DisplayOptionsContext';
import CombinationRange from './ui/CombinationRange';
import Combination from './ui/Combination';
import { AppContext, AppStateContext } from './context/AppStateContext';

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

export function OuterApp() {
  const AppState: AppContext = useContext(AppStateContext);

  const { definitions } = AppState.appState;

  return (
    <>
      {definitions.map((d, i) => (
        <InnerApp key={`definition-${i}`} />
      ))}
    </>
  );
}

interface InputProps {
  name: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

function Input(props: HTMLProps<HTMLInputElement>) {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return <input className="border-4 p-3 m-1 mr-4 rounded-xl font-bold" onFocus={handleFocus} {...props} />;
}

export function InnerApp() {
  const [total, setTotal] = useState<number>(10);
  const [size, setSize] = useState<number>(3);
  const [incStr, setIncStr] = useState<string>('');
  const [excStr, setExcStr] = useState<string>('');

  const displayOptions: DisplayOptions = useContext(DisplayOptionsContext);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    displayOptions.setGroupNum(e.target.checked);
  };

  return (
    <div className="auto px-10 my-10">
      <div className="text-3xl mb-20">
        <div>
          <label>
            Total:
            <Input name={'total'} value={total.toString() ?? ''} type={'number'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTotal(Number(e.target.value))} max={45} min={1} />
          </label>
          <label>
            Size:
            <Input type="number" max={9} min={1} name={'size'} value={size.toString() ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(Number(e.target.value))} />
          </label>
          <label>
            Include:
            <Input size={6} type="text" name={'inclusions'} value={incStr ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIncStr(e.target.value)} placeholder="Eg. 1 5" />
          </label>
          <label>
            Exclude:
            <Input size={6} type="text" name={'exclusions'} value={excStr ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExcStr(e.target.value)} placeholder="Eg. 1 5" />
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
