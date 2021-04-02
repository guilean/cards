import { TrashIcon } from '@heroicons/react/outline';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { REMOVE_CARD, SHOW_CARD_DETAIL } from '~analytics';
import { ROUTE_CARD_DETAIL } from '~app';
import { Button } from '~components/Button';
import { Card } from '~components/Card';
import { Card as CardProps } from '~features/cards';
import { cardRemoved } from '~features/cards/cardsSlice';

export const CardItem = memo((card: CardProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isImageLoaded, setImageLoaded] = useState(false);

  const onClickDelete = () => {
    dispatch(cardRemoved({ id: card._id }));
  };

  return (
    <li
      className='w-full relative border-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out rounded-lg'
      key={card._id}
    >
      <Button
        data-testid='show-detail-btn'
        metadata={{ eventName: SHOW_CARD_DETAIL }}
        className='flex self-center focus:outline-none w-full'
        onClick={() => history.push(ROUTE_CARD_DETAIL.replace(':id', card._id))}
      >
        <Card
          title={card.name}
          description={`${card.count.total}`}
          image={card.imageUrl}
          afterLoad={() => setImageLoaded(true)}
        />
      </Button>
      {isImageLoaded && (
        <Button
          data-testid='delete-card-btn'
          metadata={{ eventName: REMOVE_CARD }}
          onClick={onClickDelete}
          className='absolute top-1 right-1 bg-gray-800 rounded p-1 outline-none focus:outline-none hover:bg-red-700 transition duration-200 ease-in-out'
        >
          <TrashIcon className='h-5 w-5 md:h-5 md:w-5 text-gray-300 hover:text-white' />
        </Button>
      )}
    </li>
  );
});
