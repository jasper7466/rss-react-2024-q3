import { Component } from 'react';
import { Loader } from '../loader/loader.component';
import './overlay-loader.component.css';

export class OverlayLoader extends Component {
  render() {
    return (
      <div className="overlay-loader">
        <Loader />
      </div>
    );
  }
}
