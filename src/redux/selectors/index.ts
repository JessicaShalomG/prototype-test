import { RootState } from 'store';

export const selectWord = (state: RootState) => state.session.word;

export const selectItems = (state: RootState) => state.session.filteredItems;
