import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { isMobileNavOpen: false, windowWidth: window.innerWidth };

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
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
