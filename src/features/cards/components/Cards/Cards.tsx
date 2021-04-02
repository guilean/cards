import React from 'react';
import { CardsList, CardsSearch } from '~features/cards/components';

export const Cards = () => (
  <div className='h-full flex flex-col' data-testid='cards'>
    <CardsSearch />
    <CardsList />
  </div>
);
