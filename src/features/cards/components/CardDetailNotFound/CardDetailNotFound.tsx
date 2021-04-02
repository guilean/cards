import React from 'react';
import { useHistory } from 'react-router-dom';
import { NOT_EXIST_CARD_DETAIL } from '~analytics';
import { ROUTE_CARDS } from '~app';
import { Button } from '~components/Button';

export const CardDetailNotFound = () => {
  const history = useHistory();

  return (
    <div className='text-white flex flex-col flex-1 px-4 md:px-8 justify-center h-full'>
      <p className='text-4xl text-center text-blue-500'>Oops</p>
      <p className='my-4 text-2xl text-center italic text-gray-400 font-light'>
        You are looking for a card that doesn't exist.
        <br />
      </p>
      <Button
        data-testid='check-btn'
        className='text-3xl hover:text-blue-500 font-bold'
        metadata={{ eventName: NOT_EXIST_CARD_DETAIL }}
        onClick={() => history.push(ROUTE_CARDS)}
      >
        Check your cards
      </Button>
    </div>
  );
};
