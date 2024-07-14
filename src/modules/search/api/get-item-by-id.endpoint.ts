import { BASE_URL } from '../../../config/constants';
import { IItem } from '../interfaces/item.interface';

type Options = {
  id: number;
};

interface IResponse extends IItem {}

const responseAdapter = (response: IResponse): IItem => response;

export const getItemByIdEndpoint = async (options: Options): Promise<IItem> => {
  const { id } = options;

  const response = await fetch(`${BASE_URL}/products/${id}`);

  return responseAdapter(await response.json());
};
