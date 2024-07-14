import { App } from '../app';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Http404Page } from '../pages/http-404/http-404.page';
import { MainPage } from '../pages/main/main.page';
import { DetailsPage } from '../pages/details/details.page';

export enum RoutePath {
  root = '/',
  http404 = '/404',
  details = '/details/:id',
}

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path={RoutePath.root} element={<App />}>
      <Route path="*" element={<Http404Page />} />
      <Route path={RoutePath.root} element={<MainPage />}>
        <Route path={RoutePath.details} element={<DetailsPage />} />
      </Route>
    </Route>,
  ),
);
