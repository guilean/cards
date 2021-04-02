import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Status } from '~features/cards';
import {
  CardItem,
  CardsEmpty,
  CardsError,
  CardsLoading,
} from '~features/cards/components';
import { selectCardsStatus } from '~features/cards/selectors';
import { useCards } from '~hooks';

export const CardsList = () => {
  const { cardsWithFilters } = useCards();
  const cardsStatus = useSelector(selectCardsStatus);
  const hasCards = cardsWithFilters && cardsWithFilters.length;

  switch (cardsStatus) {
    case Status.PENDING:
      return <CardsLoading />;
    case Status.FAILED:
      return <CardsError />;
    case Status.SUCCEEDED:
      return hasCards ? (
        <ul
          data-testid='list'
          className='flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-2 justify-items-center md:items-start content-start w-full max-w-screen-lg self-center pb-4 md:pb-12'
        >
          {cardsWithFilters.map((card: Card) => (
            <CardItem {...card} key={card._id} />
          ))}
        </ul>
      ) : (
        <CardsEmpty />
      );
    default:
      return null;
  }
};
