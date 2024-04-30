import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { InnerApp } from './App';
import { DisplayOptionsContext } from './context/DisplayOptionsContext';
import { CageDefinition } from './context/AppStateContext';
import { useRenderInfo } from '@uidotdev/usehooks';
import { useList } from './useList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

interface ListProps {
  list: CageDefinition[];
  handleRemove: (i: number) => void;
}

const List = ({ list, handleRemove }: ListProps) => {
  return (
    <>
      {list.map((d, index) => (
        <div key={`definition-${index}`} className={'border-2 p-5 m-6'}>
          <h2>Index - {index}</h2>
          <InnerApp definition={d} />
          <button onClick={() => handleRemove(index)}>Remove me</button>
        </div>
      ))}
    </>
  );
};

const App = () => {
  const [groupNum, setGroupNum] = useState<boolean>(false);

  useRenderInfo('App');

  const [list, { push, insertAt, set, removeAt }] = useList<CageDefinition>([]);

  return (
    <DisplayOptionsContext.Provider value={{ groupNum: groupNum, setGroupNum: setGroupNum }}>
      <>
        {/*<button*/}
        {/*  className={'text-center border-4 p-3 m-1 rounded-xl font-bold text-small'}*/}
        {/*  onClick={() => {*/}
        {/*    push({*/}
        {/*      total: Math.ceil(Math.random() * 9),*/}
        {/*      size: 1,*/}
        {/*      inclusions: [],*/}
        {/*      exclusions: [],*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Add (at bottom)*/}
        {/*</button>*/}
        <button
          className={'text-center border-4 p-3 m-1 rounded-xl font-bold text-small'}
          onClick={() => {
            insertAt(0, {
              total: 13,
              size: 4,
              inclusions: [],
              exclusions: [],
            });
          }}
        >
          Add (at top)
        </button>
        {/*<button*/}
        {/*  className={'text-center border-4 p-3 m-1 rounded-xl font-bold text-small'}*/}
        {/*  onClick={() => {*/}
        {/*    set([*/}
        {/*      // {*/}
        {/*      //   total: 13,*/}
        {/*      //   size: 4,*/}
        {/*      //   inclusions: [],*/}
        {/*      //   exclusions: [],*/}
        {/*      // },*/}
        {/*    ]);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Reset*/}
        {/*</button>*/}
        <List list={list} handleRemove={removeAt} />
      </>
    </DisplayOptionsContext.Provider>
  );
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
