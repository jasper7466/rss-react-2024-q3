import { screen } from '@testing-library/react';
import { IItem } from '../../interfaces/item.interface';
import { renderWithProviders } from '../../../../../tests/render-with-providers.util';
import { SearchListItem } from './search-list-item.component';

describe('SearchListItem', () => {
  it('list-item component renders the relevant item data', () => {
    const mockItem: IItem = {
      id: 1,
      title: 'title1',
      brand: 'brand1',
      category: 'category1',
      description: 'description1',
      rating: 1.1,
      price: 1.11,
    };

    renderWithProviders(<SearchListItem {...mockItem} />);

    expect(screen.queryByText(mockItem.id)).toBeInTheDocument();
    expect(screen.queryByText(mockItem.title)).toBeInTheDocument();
    expect(screen.queryByText(mockItem.description)).toBeInTheDocument();
  });
});
