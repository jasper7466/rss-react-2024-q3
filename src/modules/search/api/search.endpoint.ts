import { BASE_URL } from '../../../config/constants';
import { PickOptionalPropertiesOf } from '../../../types/common-types';
import { IItem } from '../interfaces/item.interface';

type Options = {
  query: string;
  limit?: number;
  page?: number;
};

const defaultOptions: Required<PickOptionalPropertiesOf<Options>> = {
  limit: 10,
  page: 1,
};

interface IResponse {
  products: IItem[];
  limit: number;
  skip: number;
  total: number;
}

interface IData {
  items: IItem[];
  total: number;
}

const responseAdapter = (response: IResponse): IData => ({
  items: response.products,
  total: response.total,
});

export const searchItemsEndpoint = async (options: Options): Promise<IData> => {
  const { query, limit, page } = { ...defaultOptions, ...options };

  const response = await fetch(
    `${BASE_URL}/products/search?q=${query}&limit=${limit}&skip=${limit * (page - 1)}`,
  );
  return responseAdapter(await response.json());
};
