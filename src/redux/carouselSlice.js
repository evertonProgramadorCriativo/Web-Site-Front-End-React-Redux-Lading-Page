import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  items: [
    { id: 1, title: "Slide 1", content: "Conteúdo do slide 1" },
    { id: 2, title: "Slide 2", content: "Conteúdo do slide 2" },
    { id: 3, title: "Slide 3", content: "Conteúdo do slide 3" }
  ]
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.items.length;
    },
    prevSlide: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.items.length) % state.items.length;
    }
  }
});

export const { nextSlide, prevSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
