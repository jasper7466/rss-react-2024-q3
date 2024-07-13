import { FC, useCallback, useEffect, useState } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import { OverlayLoader } from '../../../../components/overlay-loader/overlay-loader.component';
import { ErrorThrower } from '../../../../components/error-thrower/error-thrower.component';
import { useLocalStorage } from '../../../../hooks/use-local-storage.hook';
import { LOCAL_STORAGE_KEY } from '../../../../config/constants';
import './search-module.component.css';

type LocalData = {
  query: string;
};

export const SearchModule: FC = () => {
  const [itemsState, setItemsState] = useState<IItem[]>([]);
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);
  const [data, updateData] = useLocalStorage<LocalData>(LOCAL_STORAGE_KEY);

  const handleSubmit = useCallback(
    async (query: string) => {
      setIsLoadingState(true);

      const items = await searchService.searchItems(query);

      setItemsState(items);
      updateData({ query });
      setIsLoadingState(false);
    },
    [updateData],
  );

  useEffect(() => {
    handleSubmit(data?.query || '');
  }, [handleSubmit, data?.query]);

  return (
    <div className="search-module">
      <section className="section">
        <SearchBar submitHandler={handleSubmit} />
      </section>
      <section className="section">
        <ErrorThrower />
        {isLoadingState ? (
          <OverlayLoader />
        ) : (
          <SearchList items={itemsState} query={data?.query || ''} />
        )}
      </section>
    </div>
  );
};
