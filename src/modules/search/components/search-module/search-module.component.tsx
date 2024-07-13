import { FC, useEffect, useState } from 'react';
import { SearchBar } from '../search-bar/search-bar.component';
import { SearchList } from '../search-list/search-list.component';
import { searchService } from '../../services/search.service';
import { IItem } from '../../interfaces/item.interface';
import { OverlayLoader } from '../../../../components/overlay-loader/overlay-loader.component';
import { ErrorThrower } from '../../../../components/error-thrower/error-thrower.component';
import './search-module.component.css';

type Props = Record<string, never>;

export const SearchModule: FC<Props> = () => {
  const [itemsState, setItemsState] = useState<IItem[]>([]);
  const [queryState, setQueryState] = useState<string | null>(null);
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);

  const handleSubmit = async (query: string) => {
    setIsLoadingState(true);

    const items = await searchService.searchItems(query);

    setItemsState(items);
    setQueryState(query);
    setIsLoadingState(false);
  };

  useEffect(() => {
    const query = searchService.getLastQuery();
    setQueryState(query);
    handleSubmit(query || '');
  }, []);

  return (
    <div className="search-module">
      <section className="section">
        <SearchBar submitHandler={handleSubmit} />
      </section>
      <section className="section">
        <ErrorThrower />
        {isLoadingState ? <OverlayLoader /> : <SearchList items={itemsState} query={queryState} />}
      </section>
    </div>
  );
};
