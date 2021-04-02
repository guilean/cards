import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cardsReducer } from '~features/cards/cardsSlice';
import { filtersReducer } from '~features/filters/filtersSlice';

export const baseReducers = combineReducers({
  cards: cardsReducer,
  filters: filtersReducer,
});
const persistConfig = {
  key: 'root',
  storage,
};
export const persistedReducer = persistReducer(persistConfig, baseReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
