import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
  isMobileNavOpen: false,
  windowWidth: window.innerWidth,
  resultsDropdownOpen: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },

    windowResizeHandler(state) {
      state.windowWidth = window.innerWidth;
    },

    selectResultsDropdown(state, action) {
      state.resultsDropdownOpen = action.payload.dropdown;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
