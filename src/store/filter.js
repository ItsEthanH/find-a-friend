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

const initialFilterState = {
  isFiltersOpen: false,
  pageSelected: FILTER_PAGES.HOME,
  activeFilters: {
    [FILTER_PAGES.TYPE]: {},
    [FILTER_PAGES.BREED]: {},
    [FILTER_PAGES.DISTANCE]: {},
    [FILTER_PAGES.GENDER]: {},
    [FILTER_PAGES.AGE]: {},
    [FILTER_PAGES.COAT]: {},
    [FILTER_PAGES.REQUIREMENTS]: {},
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changePage(state, action) {
      state.pageSelected = action.payload.page;
    },

    setFilter(state, action) {
      state.activeFilters[action.payload.filter][action.payload.key] = action.payload.value;
    },

    deleteSingleFilter(state, action) {
      delete state.activeFilters[action.payload.filter][action.payload.key];
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
