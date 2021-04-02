import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cardRemoved } from '~features/cards/cardsSlice';
import { render } from '~test-utils';
import { CardItem } from './CardItem';

jest.mock('~features/cards/selectors');
jest.mock('~hooks');
jest.mock('react-router-dom', () => {
  const moduleMock = jest.requireActual('react-router-dom');
  return {
    ...moduleMock,
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
    cardRemoved: jest.fn().mockReturnValue({}),
  };
});
jest.mock('~components/Card', () => {
  return {
    Card: (props: any): React.ReactElement => {
      return <img data-testid='card' src='#' onLoad={props.afterLoad} />;
    },
  };
});

describe('CardItem', () => {
  const mockCardRemoved = (cardRemoved as unknown) as jest.Mock;
  const mockUseDispatch = useDispatch as jest.Mock;
  const mockUseHistory = useHistory as jest.Mock;
  const mockPush = jest.fn();

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(jest.fn);
    mockUseHistory.mockReturnValue({ push: mockPush });
  });

  it('should remove card when remove button is clicked', () => {
    givenComponentRendered();
    const card = screen.getByTestId('card');
    fireEvent.load(card);
    const deleteButton = screen.getByTestId('delete-card-btn');
    fireEvent.click(deleteButton);
    expect(mockCardRemoved).toBeCalledTimes(1);
    expect(mockCardRemoved).toBeCalledWith({ id: 'id' });
  });
  it('should show remove button when image is loaded', () => {
    givenComponentRendered();
    const card = screen.getByTestId('card');
    fireEvent.load(card);
    screen.getByTestId('delete-card-btn');
  });
  it('should push route when card is clicked', () => {
    givenComponentRendered();
    const showDetailButton = screen.getByTestId('show-detail-btn');
    fireEvent.click(showDetailButton);
    expect(mockPush).toBeCalledTimes(1);
    expect(mockPush).toBeCalledWith('/cards/id');
  });
});

const givenComponentRendered = () =>
  render(
    <CardItem _id='id' name='name' imageUrl='imageUrl' count={{ total: 0 }} />,
  );
