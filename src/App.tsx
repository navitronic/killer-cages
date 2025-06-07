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
        </div>
      </div>
      <Cage total={total} size={size} />
    </div>
  );
}
