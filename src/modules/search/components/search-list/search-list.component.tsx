import { Component } from 'react';
import { SearchListItem } from '../search-list-item/search-list-item.component';
import { IItem } from '../../interfaces/item.interface';
import './search-list.component.css';

type Props = { items: IItem[]; query?: string };

export class SearchList extends Component<Props, never> {
  render() {
    return (
      <div className="search-list">
        {this.props.query && <p>Results for: "{this.props.query}"</p>}
        {this.props.items.map(item => (
          <SearchListItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
