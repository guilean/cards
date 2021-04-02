import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_OF_CARDS, useAnalytics } from '~analytics';
import { fetchCards } from '~features/cards';
import { selectCards, selectCardsFiltered } from '~features/cards/selectors';

export const useCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const cardsWithFilters = useSelector(selectCardsFiltered);
  const { sendEvent } = useAnalytics();
  const hasCards = cards.length > 0;

  useEffect(() => {
    sendEvent(TOTAL_OF_CARDS, { numOfCards: cards.length });
  }, [cards, sendEvent]);

  useEffect(() => {
    if (!hasCards) {
      dispatch(fetchCards());
    }
  }, [hasCards, dispatch]);

  return { cardsWithFilters };
};
