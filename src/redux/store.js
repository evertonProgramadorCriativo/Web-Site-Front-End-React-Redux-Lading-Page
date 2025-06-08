import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carouselSlice';
import infoCardsReducer from './infoCardsSlice';

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    infoCards: infoCardsReducer,
  }
});

