import { SearchIcon } from '@heroicons/react/outline';
import debounce from 'lodash/debounce';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filtersUpdated,
  selectFilterName,
} from '~features/filters/filtersSlice';

export const CardsSearch = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilterName);
  const [name, setName] = useState(nameFilter);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  useEffect(() => {
    const dispatchDebounced = () => dispatch(filtersUpdated({ name }));
    debounce(dispatchDebounced, 350)();
  }, [name, dispatch]);

  return (
    <form className='flex justify-center pb-4 md:pt-4 md:pb-12'>
      <div className='flex items-center rounded bg-gray-50 w-full max-w-screen-lg p-3 md:p-4 shadow-md'>
        <SearchIcon className='h-5 w-5 md:h-8 md:w-8 text-blue-500 mr-3 md:mr-4' />
        <input
          data-testid='search-input'
          className='placeholder-gray-500 text-lg md:text-2xl flex-1 outline-none font-medium md:font-bold'
          defaultValue={name as string}
          type='text'
          onChange={(e) => onChangeName(e)}
          placeholder='Search by name your favorite cards!'
        />
      </div>
    </form>
  );
};
