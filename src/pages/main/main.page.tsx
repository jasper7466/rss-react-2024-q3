import { FC } from 'react';
import { SearchModule } from '../../modules/search';
import { Outlet } from 'react-router-dom';
import './main.page.css';

export const MainPage: FC = () => (
  <div className="main-page">
    <SearchModule />
    <Outlet />
  </div>
);
