import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { token: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setBearerToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
