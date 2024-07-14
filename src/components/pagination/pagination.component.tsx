import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './pagination.component.css';

type Props = {
  pageCount: number;
  queryName: string;
};

export const Pagination: FC<Props> = ({ pageCount, queryName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPathName = location.pathname;
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get(queryName) || '1', 10);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    navigate(`${currentPathName}${`?${queryName}=${currentPage}`}`);
  }, [
    currentPage,
    currentPathName,
    navigate,
    queryName,
  ]);

  return (
    <div className="pagination">
      {Array.from({ length: pageCount }, (_, index) => (
        <Link
          className={[
            'pagination__item',
            index === currentPage - 1 ? 'pagination__item_active' : '',
          ].join(' ')}
          to={`${currentPathName}${`?${queryName}=${index + 1}`}`}
          key={index}
          onClick={handleClick}>
          {index + 1}
        </Link>
      ))}
    </div>
  );
};
