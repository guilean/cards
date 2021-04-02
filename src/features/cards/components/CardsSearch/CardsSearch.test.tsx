import React from 'react';
import { useDispatch } from 'react-redux';
import { filtersUpdated } from '~features/filters/filtersSlice';
import { fireEvent, render, screen, waitFor } from '~test-utils';
import { CardsSearch } from './CardsSearch';

jest.mock('react-redux', () => {
  const moduleMock = jest.requireActual('react-redux');
  return {
    ...moduleMock,
    useDispatch: jest.fn(),
  };
});
jest.mock('~features/filters/filtersSlice', () => {
  const moduleMock = jest.requireActual('~features/filters/filtersSlice');
  return {
    ...moduleMock,
    filtersUpdated: jest.fn(),
  };
});

describe('CardsSearch', () => {
  const mockFiltersUpdated = (filtersUpdated as unknown) as jest.Mock;
  const mockUseDispatch = useDispatch as jest.Mock;

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(jest.fn);
  });

  it('should update filters on render', async () => {
    render(<CardsSearch />);
    await waitFor(() => expect(mockFiltersUpdated).toHaveBeenCalledTimes(1));
  });
  it('should update filters on type', async () => {
    render(<CardsSearch />);
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'foo' } });
    await waitFor(() => {
      expect(mockFiltersUpdated).toHaveBeenCalledTimes(2);
      expect(mockFiltersUpdated).toHaveBeenCalledWith({ name: 'foo' });
    });
  });
});
