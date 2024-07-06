import { Component } from 'react';
import { IItem } from '../../interfaces/item.interface';
import './search-list-item.component.css';

type Props = IItem;

export class SearchListItem extends Component<Props, never> {
  render() {
    return (
      <div className="search-list-item">
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
