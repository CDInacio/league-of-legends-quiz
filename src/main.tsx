import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import ScoreProvider from './context/scoreContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
