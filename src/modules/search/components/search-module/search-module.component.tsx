import { FC, MouseEvent, useEffect, useState } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import { OverlayLoader } from '../../../../components/overlay-loader/overlay-loader.component';
import { ErrorThrower } from '../../../../components/error-thrower/error-thrower.component';
import { useLocalStorage } from '../../../../hooks/use-local-storage.hook';
import { LOCAL_STORAGE_KEY } from '../../../../config/constants';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RoutePath } from '../../../../routes';
import './search-module.component.css';

type LocalData = {
  query: string;
};

interface IItemsState {
  items: IItem[];
  total: number;
}

const initialItemsState: IItemsState = {
  items: [],
  total: 0,
};

const pageQueryName = 'page';

export const SearchModule: FC = () => {
  const [itemsState, setItemsState] = useState<IItemsState>(initialItemsState);
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);
  const [data, updateData] = useLocalStorage<LocalData>(LOCAL_STORAGE_KEY);
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(currentQueryParameters.get(pageQueryName) || '1', 10);

  const handleSearch = (query: string) => {
    updateData({ query });
    setSearchParams({ [pageQueryName]: '1' });
  };

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    navigate({ pathname: RoutePath.root, search: currentQueryParameters.toString() });
  };

  useEffect(() => {
    (async () => {
      setIsLoadingState(true);

      const items = await searchService.searchItems(data?.query || '', currentPage);
      setItemsState(items);

      setIsLoadingState(false);
    })();
  }, [currentPage, data]);

  useEffect(() => {}, [currentPage]);

  return (
    <div className="search-module" onClick={handleClick}>
      <section className="section">
        <SearchBar submitHandler={handleSearch} />
      </section>
      <section className="section">
        <ErrorThrower />
        {isLoadingState ? (
          <OverlayLoader />
        ) : (
          <SearchList items={itemsState.items} count={itemsState.total} query={data?.query || ''} />
        )}
      </section>
    </div>
  );
};
