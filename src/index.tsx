import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { InnerApp } from './App';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-10 px-4 sm:px-10">Killer Cage Calculator 🧮</h1>
      <InnerApp />
    </div>
  </React.StrictMode>,
);
