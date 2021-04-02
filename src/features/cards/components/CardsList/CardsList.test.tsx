import { screen } from '@testing-library/react';
import React from 'react';
import { Status } from '~features/cards';
import { selectCardsStatus } from '~features/cards/selectors';
import { cardFixture } from '~fixtures';
import { useCards } from '~hooks';
import { render } from '~test-utils';
import { CardsList } from './CardsList';

jest.mock('~features/cards/selectors');
jest.mock('~hooks');

describe('CardsList', () => {
  const mockSelectCardsStatus = selectCardsStatus as jest.Mock;
  const mockUseCards = useCards as jest.Mock;

  beforeEach(() => {
    mockSelectCardsStatus.mockReturnValue(Status.IDLE);
    mockUseCards.mockReturnValue({ cardsWithFilters: [] });
  });

  it('should render cards loading', () => {
    mockSelectCardsStatus.mockReturnValue(Status.PENDING);
    render(<CardsList />);
    screen.getByText(/loading/i);
  });
  it('should render cards error', () => {
    mockSelectCardsStatus.mockReturnValue(Status.FAILED);
    render(<CardsList />);
    screen.getByText(/error/i);
  });
  it('should render cards empty', () => {
    mockSelectCardsStatus.mockReturnValue(Status.SUCCEEDED);
    render(<CardsList />);
    screen.getByText(/no results/i);
  });
  it('should render cards when are populated', () => {
    mockSelectCardsStatus.mockReturnValue(Status.SUCCEEDED);
    mockUseCards.mockReturnValue({ cardsWithFilters: [cardFixture] });
    render(<CardsList />);
    screen.getByTestId('list');
  });
});
