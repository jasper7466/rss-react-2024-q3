import { LOCAL_STORAGE_KEY } from '../../../config/constants';
import { searchItemsEndpoint } from '../api/search.endpoint';
import { IItem } from '../interfaces/item.interface';

interface ILocalData {
  lastQuery: string;
}
class SearchService {
  public async searchItems(query: string): Promise<IItem[]> {
    this.setLastQuery(query);
    return await searchItemsEndpoint({ query });
  }

  public getLastQuery(): string | null {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const query = storage && (<ILocalData>JSON.parse(storage)).lastQuery;

    return query;
  }

  private setLastQuery(query: string): void {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const previousState = storage !== null ? <ILocalData>JSON.parse(storage) : {};

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(<ILocalData>{ ...previousState, lastQuery: query || null }),
    );
  }
}

export const searchService = new SearchService();
