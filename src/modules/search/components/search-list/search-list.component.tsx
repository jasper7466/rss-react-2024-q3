import { Component, Fragment } from 'react';
import { SearchListItem } from '../search-list-item/search-list-item.component';
import { IItem } from '../../interfaces/item.interface';
import './search-list.component.css';

type Props = { items: IItem[]; query?: string };

export class SearchList extends Component<Props, never> {
  render() {
    return (
      <div className="search-list">
        {this.props.query ? (
          <Fragment>
            <p>Results for: "{this.props.query}"</p>
            {this.props.items.length ? (
              this.props.items.map(item => <SearchListItem key={item.id} {...item} />)
            ) : (
              <p>Nothing found</p>
            )}
          </Fragment>
        ) : (
          <p>Try searching for something: “phone”, “laptop”, etc...</p>
        )}
      </div>
    );
  }
}
