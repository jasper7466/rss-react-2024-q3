import { FC } from 'react';
import { IItem } from '../../interfaces/item.interface';
import './search-list-item.component.css';

type Props = IItem;

export const SearchListItem: FC<Props> = ({ title, description }) => {
  return (
    <div className="search-list-item">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
