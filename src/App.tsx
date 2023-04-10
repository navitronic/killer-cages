import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {combinations} from "./utils";


interface CombinationProps {
  total: number;
  size: number;
  exclusions: number[];
}

function Combination(props: CombinationProps) {
  const {total, size, exclusions} = props;
  return (
    <div>
      {combinations(total, size, exclusions).map((combination => (
        <div>
          {combination.map(number => (
            <button>{number}</button>
          ))}
        </div>
      )))}
    </div>
  )
}

function excStrToArr(excStr: string): number[] {
  return excStr.split(" ").map(n => Number(n)).filter(value => value >= 1 && value <= 9);
}

function App() {
  const [total, setTotal] = useState<number>(10);
  const [size, setSize] = useState<number>(3);
  const [excStr, setExcStr] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
      </header>
      Total:
      <input
        type="number"
        max={45}
        min={1}
        name={"total"}
        value={total ?? ''}
        onChange={e => setTotal(Number(e.target.value))}
      />
      Size:
      <input
        type="number"
        max={9}
        min={1}
        name={"size"}
        value={size ?? ''}
        onChange={e => setSize(Number(e.target.value))}
      />
      Exclusions:
      <input
        type="text"
        name={"exclusions"}
        value={excStr ?? ''}
        onChange={e => setExcStr(e.target.value)}
      />
      <Combination total={Number(total)} size={size} exclusions={excStrToArr(excStr)}/>
    </div>
  );
}

export default App;
