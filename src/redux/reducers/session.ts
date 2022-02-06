import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import Item from 'models/dataModel';

interface SearchState {
  word: string;
  filteredItems: Item[];
}

const initialState = { word: '', filteredItems: [] } as SearchState;

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    persistSearchedWord(state, action: PayloadAction<string>) {
      state.word = action.payload;
    },

    persistFilteredItems(state, action: PayloadAction<Item[]>) {
      console.log(action);
      state.filteredItems = action.payload;
    },
  },
});

export const { persistSearchedWord, persistFilteredItems } =
  sessionSlice.actions;
export default sessionSlice.reducer;
