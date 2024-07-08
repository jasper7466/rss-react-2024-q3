import { Component } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import { OverlayLoader } from '../../../../components/overlay-loader/overlay-loader.component';
import { ErrorThrower } from '../../../../components/error-thrower/error-thrower.component';
import './search-module.component.css';

type Props = Record<string, never>;

type State = {
  items: IItem[];
  query: string | null;
  isLoading: boolean;
};

export class SearchModule extends Component<Props, State> {
  state: State = {
    items: [],
    isLoading: false,
    query: null,
  };

  handleSubmit = async (query: string) => {
    this.setState({ isLoading: true });

    const items = await searchService.searchItems(query);

    this.setState({ items, query, isLoading: false });
  };

  componentDidMount(): void {
    const query = searchService.getLastQuery();
    this.setState({ query });
    this.handleSubmit(query || '');
  }

  render() {
    return (
      <section className="search-module">
        <SearchBar submitHandler={this.handleSubmit} />
        <ErrorThrower />
        {this.state.isLoading ? (
          <OverlayLoader />
        ) : (
          <SearchList items={this.state.items} query={this.state.query} />
        )}
      </section>
    );
  }
}
