import { createSlice } from '@reduxjs/toolkit';

export const FILTER_PAGES = {
  HOME: 'Home',
  TYPE: 'Type',
  BREED: 'Breed',
  DISTANCE: 'Distance',
  GENDER: 'Gender',
  AGE: 'Age',
  COAT: 'Coat',
  REQUIREMENTS: 'Requirements',
};
const initialFilterState = { isFiltersOpen: false, pageSelected: FILTER_PAGES.HOME };

const filterSlice = createSlice({
  name: 'fitler',
  initialState: initialFilterState,
  reducers: {
    toggleFilter(state) {
      state.isFiltersOpen = !state.isFiltersOpen;
    },

    changePage(state, action) {
      state.pageSelected = action.payload.page;
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
