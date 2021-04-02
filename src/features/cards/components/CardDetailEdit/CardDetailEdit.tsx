import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SAVE_CHANGES_CARD_DETAIL } from '~analytics';
import { Button } from '~components/Button';
import { cardUpdated } from '~features/cards/cardsSlice';
import { Card } from '~features/cards/types';

export const CardDetailEdit = (card: Card) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(card?.name);
  const [image, setImage] = useState(card?.imageUrl);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !image) {
      return;
    }
    dispatch(cardUpdated({ id: card?._id, name, image }));
  };

  return (
    <form
      className='flex flex-col items-start'
      data-testid='card-detail-form'
      onSubmit={onSubmitForm}
    >
      <div className='text-white font-bold text-4xl flex flex-col mb-4 w-full'>
        <span className='text-green-500 mb-4'>Edit your card</span>
        <span className='text-green-500 text-2xl'>Name</span>
        <input
          data-testid='name-input'
          required
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Write your new name'
          className='text-xl text-white outline-none rounded-none border-b border-white focus:border-blue-500 focus:text-gray-300 bg-transparent'
        />
      </div>
      <img
        style={{ height: '350px' }}
        className='max-w-xs'
        src={image}
        alt={`Illustration of ${name}`}
      />
      <div className='flex w-full'>
        <input
          required
          type='text'
          placeholder='Write your new image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='mt-2 w-full text-xl text-white outline-none rounded-none border-b border-white focus:border-blue-500 focus:text-gray-300 bg-transparent'
        />
      </div>
      <Button
        metadata={{ eventName: SAVE_CHANGES_CARD_DETAIL }}
        type='submit'
        className='mt-4 text-3xl hover:text-green-500 font-bold self-center md:self-end text-white'
      >
        Update
      </Button>
    </form>
  );
};
