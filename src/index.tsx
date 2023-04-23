import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InnerApp from './App';
import reportWebVitals from './reportWebVitals';
import {DisplayOptionsContext} from "./context/DisplayOptionsContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <DisplayOptionsContext.Provider value={{showAll, setShowAll}}>
      {children}
    </DisplayOptionsContext.Provider>
  )
}

root.render(
  <React.StrictMode>
    <App>
      <InnerApp/>
    </App>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
