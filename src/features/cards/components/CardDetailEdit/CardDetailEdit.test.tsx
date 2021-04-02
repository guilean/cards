import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cardUpdated } from '~features/cards/cardsSlice';
import { cardFixture } from '~fixtures';
import { render } from '~test-utils';
import { CardDetailEdit } from './CardDetailEdit';

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

describe('CardDetailEdit', () => {
  const mockCardUpdated = (cardUpdated as unknown) as jest.Mock;
  const mockUseDispatch = useDispatch as jest.Mock;

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(jest.fn);
  });

  it('should render edit card', () => {
    render(<CardDetailEdit {...cardFixture} />);
    screen.getByText(/edit/i);
  });
  it('should dispatch card updated on submit form', () => {
    render(<CardDetailEdit {...cardFixture} />);
    const form = screen.getByTestId('card-detail-form');
    fireEvent.submit(form);
    expect(mockCardUpdated).toBeCalledTimes(1);
  });
  it('should not submit form when fields are empty', () => {
    render(<CardDetailEdit {...cardFixture} />);
    const nameField = screen.getByTestId('name-input');
    fireEvent.change(nameField, { target: { value: '' } });
    const form = screen.getByTestId('card-detail-form');
    fireEvent.submit(form);
    expect(mockCardUpdated).toBeCalledTimes(0);
  });
});
