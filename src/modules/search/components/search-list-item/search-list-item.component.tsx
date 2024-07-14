import { FC } from 'react';
import { IItem } from '../../interfaces/item.interface';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { RoutePath } from '../../../../routes';
import './search-list-item.component.css';

type Props = IItem;

export const SearchListItem: FC<Props> = ({ title, description, id }) => {
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <Link
      onClick={handleClick}
      to={{ pathname: generatePath(RoutePath.details, { id: `${id}` }), search: location.search }}
      className="search-list-item"
      data-testid="list-item">
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
    </Link>
  );
};
