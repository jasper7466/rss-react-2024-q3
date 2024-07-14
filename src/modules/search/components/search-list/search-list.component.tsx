import { FC } from 'react';
import { SearchListItem } from '../search-list-item/search-list-item.component';
import { IItem } from '../../interfaces/item.interface';
import { Pagination } from '../../../../components/pagination/pagination.component';
import { PAGE_SIZE } from '../../../../config/constants';
import './search-list.component.css';

type Props = { items: IItem[]; count: number; query: string | null };

const pageQueryName = 'page';

export const SearchList: FC<Props> = ({ items, count, query }) => {
  return (
    <div className="search-list">
      <p>Results for: "{query || '~ all products ~'}"</p>
      <Pagination pageCount={Math.ceil(count / PAGE_SIZE)} queryName={pageQueryName} />
      {items.length ? (
        items.map(item => <SearchListItem key={item.id} {...item} />)
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
};
