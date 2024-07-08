import { Component } from 'react';
import { SearchModule } from './modules/search';
import './app.css';

export class App extends Component {
  render() {
    return (
      <main className="app-container">
        <SearchModule />
      </main>
    );
  }
}
