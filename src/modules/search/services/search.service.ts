import { PAGE_SIZE } from '../../../config/constants';
import { getItemByIdEndpoint } from '../api/get-item-by-id.endpoint';
import { searchItemsEndpoint } from '../api/search.endpoint';
import { IItem } from '../interfaces/item.interface';
class SearchService {
  public async searchItems(
    query: string,
    page: number,
  ): Promise<{ items: IItem[]; total: number }> {
    return await searchItemsEndpoint({ query, page, limit: PAGE_SIZE });
  }

  public async getItemById(id: number): Promise<IItem> {
    return await getItemByIdEndpoint({ id });
  }
}

export const searchService = new SearchService();
