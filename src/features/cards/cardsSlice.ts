import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_CARDS } from '~api';
import { Card, CardsState, Status } from './types';

const initialState: CardsState = {
  items: [],
  status: Status.IDLE,
};

// Create Async Thunk
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (): Promise<Array<Card>> => {
    const response = await axios.get(API_CARDS);
    return response.data;
  },
);

// Handle actions in reducers
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardRemoved(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((card: Card) => card._id !== id);
    },
    cardUpdated(state, action) {
      const { id, name, image } = action.payload;
      const existingCard = state.items.find((card: Card) => card._id === id);
      if (existingCard) {
        existingCard.name = name;
        existingCard.imageUrl = image;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(fetchCards.fulfilled, (state, { payload }) => {
        state.status = Status.SUCCEEDED;
        if (payload) {
          state.items = payload;
        }
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = Status.FAILED;
      }),
});

// Actions
export const { cardRemoved, cardUpdated } = cardsSlice.actions;

export const { reducer: cardsReducer } = cardsSlice;
