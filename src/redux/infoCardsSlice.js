import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    { title: "Velocidade", icon: "⚡", description: "Nosso site é rápido e eficiente." },
    { title: "Segurança", icon: "🔒", description: "Protegemos seus dados com segurança de ponta." },
    { title: "Confiabilidade", icon: "✅", description: "Serviços confiáveis e estáveis." },
    { title: "Suporte", icon: "📞", description: "Atendimento ao cliente dedicado." }
  ]
};

const infoCardsSlice = createSlice({
  name: 'infoCards',
  initialState,
  reducers: {
    // Se quiser atualizar dinamicamente depois
    setCards: (state, action) => {
      state.cards = action.payload;
    }
  }
});

export const { setCards } = infoCardsSlice.actions;
export default infoCardsSlice.reducer;
