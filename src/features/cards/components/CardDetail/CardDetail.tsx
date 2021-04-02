import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { GO_BACK_CARD_DETAIL } from '~analytics';
import { RootState, ROUTE_CARDS } from '~app';
import { Button } from '~components/Button';
import {
  CardDetailEdit,
  CardDetailNotFound,
  CardDetailPreview,
} from '~features/cards/components';
import { selectCardById } from '~features/cards/selectors';

export const CardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const card = useSelector((state: RootState) => selectCardById(state, id));

  return (
    <div className='max-w-screen-lg m-auto h-full' data-testid='card-detail'>
      <Button
        data-testid='navigate-back-btn'
        className='focus:outline-none'
        metadata={{ eventName: GO_BACK_CARD_DETAIL }}
        onClick={() => history.push(ROUTE_CARDS)}
      >
        <ArrowLeftIcon className='h-8 w-8 text-blue-500' />
      </Button>
      {card ? (
        <div className='flex flex-col md:flex-row justify-center mt-2 gap-2 items-center md:items-start py-2'>
          <CardDetailPreview {...card} />
          <div className='self-center transform rotate-90 md:rotate-0'>
            <ChevronDoubleRightIcon className='md:animate-bounce h-8 w-8 text-green-500' />
          </div>
          <CardDetailEdit {...card} />
        </div>
      ) : (
        <CardDetailNotFound />
      )}
    </div>
  );
};
