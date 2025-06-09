 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  items: [
    {
      id: 1,
      title: "Slide 1",
      content: "Conteúdo do slide 1",
      image: "https://img.freepik.com/fotos-gratis/pessoas-de-coworking-trabalhando-juntas_23-2149328285.jpg"
    },
    {
      id: 2,
      title: "Slide 2",
      content: "Conteúdo do slide 2",
      image: "https://img.freepik.com/fotos-premium/colegas-em-grupo-e-leitura-no-escritorio-laptop-e-brainstorming-no-espaco-de-trabalho-e-trabalho-em-equipe-homens-e-mulheres-no-local-de-trabalho-com-sorriso-planejamento-e-colaboracao-de-auditor-de-projeto-ou-inicio-de-negocio_590464-387765.jpg"
    },
    {
      id: 3,
      title: "Slide 3",
      content: "Conteúdo do slide 3",
      image: "https://img.freepik.com/fotos-gratis/pessoas-de-coworking-trabalhando-juntas_23-2149328285.jpg"
    }
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
    },
    setSlide: (state, action) => {
      state.currentIndex = action.payload;
    }
  }
});

export const { nextSlide, prevSlide, setSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
