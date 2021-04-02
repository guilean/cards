import React from 'react';

export const CardsEmpty = () => (
  <div className='text-white flex flex-col flex-1 px-4 md:px-8 justify-center'>
    <p className='text-4xl text-center text-blue-500'>No results</p>
    <p className='my-4 text-2xl text-center italic text-gray-400 font-light'>
      Gandalf might find results but we can't.
    </p>
  </div>
);
