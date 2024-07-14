import { screen } from '@testing-library/react';
import { SearchList } from './search-list.component';
import { IItem } from '../../interfaces/item.interface';
import { renderWithProviders } from '../../../../../tests/render-with-providers.util';

describe('SearchList', () => {
  it('renders the specified number of cards', () => {
    const mockItems: IItem[] = [
      {
        id: 1,
        title: 'title1',
        brand: 'brand1',
        category: 'category1',
        description: 'description1',
        rating: 1.1,
        price: 1.11,
      },
      {
        id: 2,
        title: 'title2',
        brand: 'brand2',
        category: 'category2',
        description: 'description2',
        rating: 2.2,
        price: 2.22,
      },
    ];

    const mockQuery = 'query';

    renderWithProviders(
      <SearchList items={mockItems} count={mockItems.length} query={mockQuery} />,
    );

    const listItems = screen.getAllByTestId('list-item');

    expect(listItems.length).toBe(mockItems.length);
  });

  it('appropriate message is displayed if no cards are present', () => {
    const mockItems: IItem[] = [];
    const mockQuery = 'query';

    renderWithProviders(
      <SearchList items={mockItems} count={mockItems.length} query={mockQuery} />,
    );

    const listItems = screen.queryAllByTestId('list-item');

    expect(listItems.length).toBe(mockItems.length);
    expect(screen.queryByText('Nothing found')).toBeInTheDocument();
  });
});
