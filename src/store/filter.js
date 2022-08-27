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
  initialStates: {
    [FILTER_PAGES.TYPE]: { value: 'all' },
    [FILTER_PAGES.BREED]: { default: null },
    [FILTER_PAGES.DISTANCE]: { value: 100 },
    [FILTER_PAGES.GENDER]: { male: false, female: false },
    [FILTER_PAGES.AGE]: { baby: false, young: false, adult: false, senior: false },
    [FILTER_PAGES.COAT]: { default: null },
    [FILTER_PAGES.REQUIREMENTS]: {
      'child friendly': false,
      'dog friendly': false,
      'cat friendly': false,
      'house trained': false,
      'special needs': false,
    },
  },
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

    changeAnimalType(state, action) {
      let newBreeds = {};

      for (const breed of action.payload.breeds) {
        newBreeds[breed.name] = false;
      }

      state.initialStates.Breed = newBreeds;

      if (state.activeFilters[FILTER_PAGES.TYPE].value !== 'all') {
        state.initialStates.Coat = action.payload.coats;
      }
    },

    deleteSingleFilter(state, action) {
      delete state.activeFilters[action.payload.filter][action.payload.key];
    },

    deleteAllFilters(state) {
      state.pageSelected = FILTER_PAGES.HOME;
      state.activeFilters = initialFilterState.activeFilters;
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
