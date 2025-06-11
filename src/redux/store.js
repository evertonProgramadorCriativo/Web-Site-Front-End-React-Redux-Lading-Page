import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carouselSlice';
import infoCardsReducer from './infoCardsSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice'; 
export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    infoCards: infoCardsReducer,
     cart: cartReducer,
     auth: authReducer 
  }
});

