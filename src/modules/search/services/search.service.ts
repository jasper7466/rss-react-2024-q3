import { PAGE_SIZE } from '../../../config/constants';
import { searchItemsEndpoint } from '../api/search.endpoint';
import { IItem } from '../interfaces/item.interface';
class SearchService {
  public async searchItems(
    query: string,
    page: number,
  ): Promise<{ items: IItem[]; total: number }> {
    return await searchItemsEndpoint({ query, page, limit: PAGE_SIZE });
  }
}

export const searchService = new SearchService();
