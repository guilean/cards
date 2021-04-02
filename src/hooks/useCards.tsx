import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_OF_CARDS, useAnalytics } from '~analytics';
import { fetchCards, Status } from '~features/cards';
import {
  selectCards,
  selectCardsFiltered,
  selectCardsStatus,
} from '~features/cards/selectors';

export const useCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const cardsWithFilters = useSelector(selectCardsFiltered);
  const cardsStatus = useSelector(selectCardsStatus);
  const { sendEvent } = useAnalytics();

  useEffect(() => {
    sendEvent(TOTAL_OF_CARDS, { numOfCards: cards.length });
  }, [cards, sendEvent]);

  useEffect(() => {
    if (cardsStatus === Status.IDLE) {
      dispatch(fetchCards());
    }
  }, [cardsStatus, dispatch]);

  return { cardsWithFilters };
};
