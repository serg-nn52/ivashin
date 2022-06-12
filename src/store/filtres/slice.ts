import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TStateTypeFiltres } from './types';

const initialState: TStateTypeFiltres = {
  loading: false,
  filtres: [],
  error: null,
};
const filtresSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    setFilter(state: TStateTypeFiltres, action: PayloadAction<string>) {
      if (!state.filtres.includes(action.payload)) {
        state.filtres.push(action.payload);
      }
    },
    resetFilter(state: TStateTypeFiltres) {
      state.filtres = [];
    },
  },
  extraReducers: {},
});

export const { setFilter, resetFilter } = filtresSlice.actions;
export default filtresSlice.reducer;
