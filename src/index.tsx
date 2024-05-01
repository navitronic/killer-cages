import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { InnerApp } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-10 px-10">Killer Cage Calculator 🧮</h1>
      <InnerApp />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
