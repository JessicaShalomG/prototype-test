import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Item from 'models/dataModel';

interface SearchState {
  filteredCategories: string[];
  filteredItems: Item[];
  triggerSearch: boolean;
  word: string;
}

const initialState = {
  filteredCategories: [],
  filteredItems: [],
  triggerSearch: false,
  word: '',
} as SearchState;

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    persistsFilteredCategories(state, action: PayloadAction<string[]>) {
      state.filteredCategories = action.payload;
    },

    persistFilteredItems(state, action: PayloadAction<Item[]>) {
      state.filteredItems = action.payload;
    },
    persistSearchedWord(state, action: PayloadAction<string>) {
      state.word = action.payload;
    },
    persistTriggerSearch(state, action: PayloadAction<boolean>) {
      state.triggerSearch = action.payload;
    },
  },
});

export const {
  persistsFilteredCategories,
  persistFilteredItems,
  persistSearchedWord,
  persistTriggerSearch,
} = sessionSlice.actions;
export default sessionSlice.reducer;
