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

const initialFilterState = { isFiltersOpen: false, pageSelected: FILTER_PAGES.HOME, filters: {} };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    toggleFilter(state) {
      state.isFiltersOpen = !state.isFiltersOpen;
    },

    changePage(state, action) {
      state.pageSelected = action.payload.page;
    },

    setFilter(state, action) {
      state.filters[action.payload.filter] = {
        value: action.payload.value,
        filterQuantity: action.payload.filterQuantity,
      };
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
