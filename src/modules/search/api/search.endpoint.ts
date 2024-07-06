import { BASE_URL } from '../../../config/constants';
import { PickOptionalPropertiesOf } from '../../../types/common-types';
import { IItem } from '../interfaces/item.interface';

type Options = {
  query: string;
  limit?: number;
  page?: number;
};

const defaultOptions: PickOptionalPropertiesOf<Options> = {
  limit: 10,
  page: 1,
};

interface IResponse {
  products: IItem[];
  limit: number;
  skip: number;
  total: number;
}

const responseAdapter = (response: IResponse): IItem[] => response.products;

export const searchItemsEndpoint = async (options: Options): Promise<IItem[]> => {
  const { query, limit } = { ...defaultOptions, ...options };

  const response = await fetch(`${BASE_URL}/products/search?q=${query}&limit=${limit}`);
  return responseAdapter(await response.json());
};
