import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import './styles/index.css';
import { ErrorBoundary } from './components/error-boundary/error-boundary.component.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
