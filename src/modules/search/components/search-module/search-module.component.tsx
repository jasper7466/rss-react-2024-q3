import { Component } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import './search-module.component.css';

type Props = Record<string, never>;

type State = {
  items: IItem[];
  query?: string;
};

export class SearchModule extends Component<Props, State> {
  state: State = {
    items: [],
  };

  async handleSubmit(query: string) {
    const items = await searchService.searchItems(query);
    this.setState({ items, query });
  }

  render() {
    return (
      <section className="search-module">
        <SearchBar submitHandler={this.handleSubmit.bind(this)} />
        <SearchList items={this.state.items} query={this.state.query} />
      </section>
    );
  }
}
