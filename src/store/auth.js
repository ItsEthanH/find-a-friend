import { createSlice } from '@reduxjs/toolkit';
import getCookieValue from '../util/getCookieValue';

const initialAuthState = { token: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    checkTokenInCookie(state) {
      let tokenCookieValue = getCookieValue('bearerToken');
      if (tokenCookieValue) {
        state.token = tokenCookieValue;
      } else {
        authSlice.caseReducers.getBearerToken(state);
      }
    },

    async getBearerToken(state) {
      const clientId = process.env.REACT_APP_CLIENT_ID;
      const key = process.env.REACT_APP_KEY;

      const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${key}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      });

      if (!response.ok) {
        throw Error('Something went wrong with API authentication!');
      }

      const data = await response.json();
      const setTokenAction = { type: 'setToken', token: data.access_token, time: data.expires_in };

      authSlice.caseReducers.setBearerToken(state, setTokenAction);
    },

    setBearerToken(state, action) {
      const dateObj = new Date();
      const dateTime = dateObj.getTime();
      const expiry = new Date(dateTime + action.time * 1000);

      document.cookie = `bearerToken=${action.token}; expires=${expiry}}`;
      state.token = action.token;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
