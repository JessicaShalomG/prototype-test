import { RootState } from 'store';

export const selectItems = (state: RootState) => state.session.filteredItems;

export const selectTriggerSearch = (state: RootState) =>
  state.session.triggerSearch;

export const selectWord = (state: RootState) => state.session.word;
