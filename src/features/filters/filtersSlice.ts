import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~app';
import { FiltersState } from './types';

const initialState: FiltersState = {
  filters: { name: null },
};

// Handle actions in reducers
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersUpdated(state, action) {
      const { name } = action.payload;
      state.filters.name = name;
    },
  },
});

// Actions
export const { filtersUpdated } = filtersSlice.actions;

// Selectors
export const selectFilters = (state: RootState) => state.filters.filters;
export const selectFilterName = (state: RootState) =>
  state.filters.filters.name;

export const { reducer: filtersReducer } = filtersSlice;
