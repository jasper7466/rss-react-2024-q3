import { Component } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import { OverlayLoader } from '../../../../components/overlay-loader/overlay-loader.component';
import './search-module.component.css';

type Props = Record<string, never>;

type State = {
  items: IItem[];
  query?: string;
  isLoading: boolean;
};

export class SearchModule extends Component<Props, State> {
  state: State = {
    items: [],
    isLoading: false,
  };

  async handleSubmit(query: string) {
    this.setState({ isLoading: true });

    const items = await searchService.searchItems(query);

    this.setState({ items, query, isLoading: false });
  }

  render() {
    return (
      <section className="search-module">
        <SearchBar submitHandler={this.handleSubmit.bind(this)} />
        {this.state.isLoading ? (
          <OverlayLoader />
        ) : (
          <SearchList items={this.state.items} query={this.state.query} />
        )}
      </section>
    );
  }
}
