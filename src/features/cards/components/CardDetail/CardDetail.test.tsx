import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ROUTE_CARDS } from '~app';
import { cardUpdated } from '~features/cards/cardsSlice';
import { selectCardById } from '~features/cards/selectors';
import { cardFixture } from '~fixtures';
import { render } from '~test-utils';
import { CardDetail } from './CardDetail';

jest.mock('~features/cards/selectors');
jest.mock('react-router-dom', () => {
  const moduleMock = jest.requireActual('react-router-dom');
  return {
    ...moduleMock,
    useParams: jest.fn(),
    useHistory: jest.fn(),
  };
});
jest.mock('react-redux', () => {
  const moduleMock = jest.requireActual('react-redux');
  return {
    ...moduleMock,
    useDispatch: jest.fn(),
  };
});
jest.mock('~features/cards/cardsSlice', () => {
  const moduleMock = jest.requireActual('~features/cards/cardsSlice');
  return {
    ...moduleMock,
    cardUpdated: jest.fn(),
  };
});

describe('CardDetail', () => {
  const mockCardUpdated = (cardUpdated as unknown) as jest.Mock;
  const mockSelectCardById = selectCardById as jest.Mock;
  const mockUseParams = useParams as jest.Mock;
  const mockUseDispatch = useDispatch as jest.Mock;

  const mockUseHistory = useHistory as jest.Mock;
  const mockPush = jest.fn();

  beforeEach(() => {
    mockSelectCardById.mockReturnValue(cardFixture);
    mockUseDispatch.mockReturnValue(jest.fn);
    mockUseParams.mockReturnValue({ id: 'id' });
    mockUseHistory.mockReturnValue({ push: mockPush });
  });

  it('should display detail when card exist', () => {
    render(<CardDetail />);
    screen.getByText(/foo/i);
  });
  it('should render not found message card does not exist', () => {
    mockSelectCardById.mockReturnValue(null);
    render(<CardDetail />);
    screen.getByText(/oops/i);
  });
  it('should push cards route when card does not exist and button is pressed', () => {
    mockSelectCardById.mockReturnValue(null);
    render(<CardDetail />);
    const checkCardsButton = screen.getByTestId('check-btn');
    fireEvent.click(checkCardsButton);
    expect(mockPush).toBeCalledTimes(1);
    expect(mockPush).toBeCalledWith(ROUTE_CARDS);
  });
  it('should go to cards route when back button is clicked', () => {
    render(<CardDetail />);
    const backButton = screen.getByTestId('navigate-back-btn');
    fireEvent.click(backButton);
    expect(mockPush).toBeCalledTimes(1);
    expect(mockPush).toBeCalledWith('/cards');
  });
  it('should dispatch card updated on submit form', () => {
    render(<CardDetail />);
    const form = screen.getByTestId('card-detail-form');
    fireEvent.submit(form);
    expect(mockCardUpdated).toBeCalledTimes(1);
  });
  it('should not submit form when fields are empty', () => {
    render(<CardDetail />);
    const nameField = screen.getByTestId('name-input');
    fireEvent.change(nameField, { target: { value: '' } });
    const form = screen.getByTestId('card-detail-form');
    fireEvent.submit(form);
    expect(mockCardUpdated).toBeCalledTimes(0);
  });
});
