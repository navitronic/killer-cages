import React, { HTMLProps, useState } from 'react';
import { invalidNumberListValues } from './utils';
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
  const [total, setTotal] = useState<string>('10');
  const [size, setSize] = useState<string>('3');
  const [exclusions, setExclusions] = useState<string>('');
  const [inclusions, setInclusions] = useState<string>('');

  const parsedTotal = Number(total);
  const parsedSize = Number(size);
  const totalError = total.trim() === '' || !Number.isInteger(parsedTotal) || parsedTotal < 1 || parsedTotal > 45 ? 'Total must be a whole number from 1 to 45.' : '';
  const sizeError = size.trim() === '' || !Number.isInteger(parsedSize) || parsedSize < 1 || parsedSize > 9 ? 'Size must be a whole number from 1 to 9.' : '';
  const invalidExclusions = invalidNumberListValues(exclusions);
  const invalidInclusions = invalidNumberListValues(inclusions);
  const exclusionsError = invalidExclusions.length > 0 ? `Disallowed numbers must be digits from 1 to 9: ${invalidExclusions.join(', ')}.` : '';
  const inclusionsError = invalidInclusions.length > 0 ? `Required numbers must be digits from 1 to 9: ${invalidInclusions.join(', ')}.` : '';

  return (
    <div className="mx-auto px-4 sm:px-10 my-10">
      <div className="text-xl sm:text-2xl mb-10 sm:mb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col">
            Total:
            <Input name={'total'} value={total} type={'number'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTotal(e.target.value)} max={45} min={1} />
          </label>
          <label className="flex flex-col">
            Size:
            <Input type="number" max={9} min={1} name={'size'} value={size} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value)} />
          </label>
          <label className="flex flex-col">
            Disallowed Numbers:
            <Input name={'exclusions'} value={exclusions} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExclusions(e.target.value)} placeholder="e.g. 1 2 3" />
          </label>
          <label className="flex flex-col">
            Required Numbers:
            <Input name={'inclusions'} value={inclusions} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInclusions(e.target.value)} placeholder="e.g. 1 2" />
          </label>
        </div>
      </div>
      {(totalError || sizeError || exclusionsError || inclusionsError) && (
        <div className="mb-5 px-3 text-red-700">
          {totalError && <p>{totalError}</p>}
          {sizeError && <p>{sizeError}</p>}
          {exclusionsError && <p>{exclusionsError}</p>}
          {inclusionsError && <p>{inclusionsError}</p>}
        </div>
      )}
      {!totalError && !sizeError && !exclusionsError && !inclusionsError && <Cage total={parsedTotal} size={parsedSize} exclusions={exclusions} inclusions={inclusions} />}
    </div>
  );
}
