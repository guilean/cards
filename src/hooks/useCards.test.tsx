import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_OF_CARDS, useAnalytics } from '~analytics';
import { fetchCards, Status } from '~features/cards';
import {
  selectCards,
  selectCardsFiltered,
  selectCardsStatus,
} from '~features/cards/selectors';
import { cardFixture } from '~fixtures';
import { useCards } from './useCards';

jest.mock('~analytics');
jest.mock('react-redux', () => {
  const moduleMock = jest.requireActual('react-redux');
  return {
    ...moduleMock,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});
jest.mock('~features/cards/selectors', () => {
  const moduleMock = jest.requireActual('~features/cards/selectors');
  return {
    ...moduleMock,
    selectCards: jest.fn(),
    selectCardsFiltered: jest.fn(),
    selectCardsStatus: jest.fn(),
  };
});
jest.mock('~features/cards/cardsSlice', () => {
  const moduleMock = jest.requireActual('~features/cards/cardsSlice');
  return {
    ...moduleMock,
    fetchCards: jest.fn(),
  };
});

describe('useCards', () => {
  const mockUseDispatch = useDispatch as jest.Mock;
  const mockUseSelector = useSelector as jest.Mock;
  const mockSelectCards = selectCards as jest.Mock;
  const mockSelectCardsFiltered = (selectCardsFiltered as unknown) as jest.Mock;
  const mockSelectCardsStatus = selectCardsStatus as jest.Mock;
  const mockUseAnalytics = useAnalytics as jest.Mock;
  const mockSendEvent = jest.fn();
  const mockFetchCards = (fetchCards as unknown) as jest.Mock;

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(jest.fn);
    mockUseSelector.mockImplementation((fn) => fn());
    mockSelectCards.mockReturnValue([]);
    mockSelectCardsFiltered.mockReturnValue([]);
    mockSelectCardsStatus.mockReturnValue(Status.IDLE);
    mockUseAnalytics.mockReturnValue({ sendEvent: mockSendEvent });
  });

  it('should use cards selector', () => {
    renderHook(() => useCards());
    expect(mockSelectCards).toHaveBeenCalled();
  });
  it('should use card filters selector', () => {
    renderHook(() => useCards());
    expect(mockSelectCardsFiltered).toHaveBeenCalled();
  });
  it('should use card status selector', () => {
    renderHook(() => useCards());
    expect(mockSelectCardsStatus).toHaveBeenCalled();
  });
  it('should send events when cards change', () => {
    renderHook(() => useCards());
    expect(mockSendEvent).toHaveBeenCalled();
    expect(mockSendEvent).toHaveBeenCalledWith(TOTAL_OF_CARDS, {
      numOfCards: 0,
    });
  });
  it('should fetch cards when status is idle', () => {
    renderHook(() => useCards());
    expect(mockFetchCards).toBeCalledTimes(1);
  });
  it('should not fetch cards when status is different of idle', () => {
    mockSelectCardsStatus.mockReturnValue(Status.SUCCEEDED);
    renderHook(() => useCards());
    expect(mockFetchCards).toBeCalledTimes(0);
  });
  it('should return cards with filters', () => {
    const { result } = renderHook(() => useCards());
    expect(result.current).toMatchObject({
      cardsWithFilters: [],
    });
  });
  it('should return cards with filters populated', () => {
    mockSelectCardsFiltered.mockReturnValue([cardFixture]);
    const { result } = renderHook(() => useCards());
    expect(result.current).toMatchObject({
      cardsWithFilters: [cardFixture],
    });
  });
});
