import { FC } from 'react';
import { Loader } from '../loader/loader.component';
import './overlay-loader.component.css';

export const OverlayLoader: FC = () => (
  <div className="overlay-loader">
    <Loader />
  </div>
);
