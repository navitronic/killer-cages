import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { OuterApp } from './App';
import reportWebVitals from './reportWebVitals';
import { DisplayOptionsContext } from './context/DisplayOptionsContext';
import { AppState, AppStateContext } from './context/AppStateContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const [groupNum, setGroupNum] = useState<boolean>(false);
  const [appState, setAppState] = useState<AppState>({
    definitions: [
      {
        total: 15,
        size: 4,
        inclusions: [],
        exclusions: [],
      },
      {
        total: 15,
        size: 4,
        inclusions: [],
        exclusions: [],
      },
    ],
  });

  return (
    <DisplayOptionsContext.Provider value={{ groupNum: groupNum, setGroupNum: setGroupNum }}>
      <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>
    </DisplayOptionsContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <App>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-10 px-10">Killer Cage Calculator 🧮</h1>
        <OuterApp />
      </div>
    </App>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
