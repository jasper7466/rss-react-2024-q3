import { searchItemsEndpoint } from '../api/search.endpoint';
import { IItem } from '../interfaces/item.interface';
class SearchService {
  public async searchItems(query: string): Promise<IItem[]> {
    return await searchItemsEndpoint({ query });
  }
}

export const searchService = new SearchService();
