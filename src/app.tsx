import { FC } from 'react';
import { SearchModule } from './modules/search';
import './app.css';

export const App: FC = () => {
  return (
    <main className="app-container">
      <SearchModule />
    </main>
  );
};
