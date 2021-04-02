import React from 'react';

export const CardsError = () => (
  <div className='text-white flex flex-col flex-1 px-4 md:px-8 justify-center'>
    <p className='text-4xl text-center text-red-500'>Error</p>
    <p className='my-4 text-2xl text-center italic text-gray-400 font-light'>
      Something went wrong. Just don't panic! <br />
      Refresh the page.
    </p>
  </div>
);
