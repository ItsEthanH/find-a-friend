import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { isMobileNavOpen: false, windowWidth: window.innerWidth };
let windowTimer;

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },

    windowResizeHandler(state) {
      if (windowTimer) {
        clearTimeout(windowTimer);
      }

      windowTimer = setTimeout(() => {
        state.windowWidth = window.innerWidth;
      }, 300);
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
