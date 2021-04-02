import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '~app';

// Selectors
export const selectCards = (state: RootState) => state.cards.items;

export const selectCardsStatus = (state: RootState) => state.cards.status;

export const selectCardsByName = (state: RootState, name: string) =>
  state.cards.items.filter((card) => card.name === name);

export const selectCardById = (state: RootState, id: string) =>
  state.cards.items.find((card) => card._id === id);

export const selectCardsFiltered = createSelector(
  selectCards,
  (state) => state.filters.filters,
  (cards, filters) => {
    const { name } = filters;
    if (!name) {
      return cards;
    }
    return cards.filter((card) =>
      card.name.toLowerCase().includes(name.toLowerCase()),
    );
  },
);
