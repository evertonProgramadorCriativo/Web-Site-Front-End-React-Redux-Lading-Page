import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carouselSlice';
import infoCardsReducer from './infoCardsSlice';
import cartReducer from './cartSlice';
export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    infoCards: infoCardsReducer,
     cart: cartReducer,
  }
});

