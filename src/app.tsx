import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import './app.css';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <main className="app-container">
        <Outlet />
      </main>
    </ErrorBoundary>
  );
};
