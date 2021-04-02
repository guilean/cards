import React from 'react';
import { Card } from '~features/cards/types';

export const CardDetailPreview = (card: Card) => (
  <div className='flex flex-col items-start'>
    <div className='text-white font-bold text-4xl flex flex-col mb-4 text-center md:text-right self-end'>
      <span className='text-gray-500 mb-4'>Original Card</span>
      <span className='text-gray-500 text-2xl'>Name</span>
      <span className='break-all text-xl font-medium'>{card?.name}</span>
    </div>
    <div className='flex justify-center md:justify-end w-full'>
      <img
        className='max-w-xs'
        style={{ height: '350px' }}
        src={card?.imageUrl}
        alt={`Illustration of ${card?.name}`}
      />
    </div>
  </div>
);
