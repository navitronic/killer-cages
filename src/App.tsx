import React, { HTMLProps, useState } from 'react';
import Cage from './ui/Cage';

function Input(props: HTMLProps<HTMLInputElement>) {
  return (
    <input
      className="border-4 p-3 m-1 mr-4 rounded-xl font-bold"
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
      }}
      {...props}
    />
  );
}

export function InnerApp() {
  const [total, setTotal] = useState<number>(10);
  const [size, setSize] = useState<number>(3);
  const [exclusions, setExclusions] = useState<string>('');

  return (
    <div className="mx-auto px-10 my-10">
      <div className="text-2xl mb-20">
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
            Disallowed Numbers:
            <Input name={'exclusions'} value={exclusions} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExclusions(e.target.value)} placeholder="e.g. 1 2 3" />
          </label>
        </div>
      </div>
      <Cage total={total} size={size} exclusions={exclusions} />
    </div>
  );
}
