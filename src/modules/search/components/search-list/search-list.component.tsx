import { FC } from 'react';
import { SearchListItem } from '../search-list-item/search-list-item.component';
import { IItem } from '../../interfaces/item.interface';
import './search-list.component.css';

type Props = { items: IItem[]; query: string | null };

export const SearchList: FC<Props> = ({ items, query }) => {
  return (
    <div className="search-list">
      <p>Results for: "{query || '~ all products ~'}"</p>
      {items.length ? (
        items.map(item => <SearchListItem key={item.id} {...item} />)
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
};
