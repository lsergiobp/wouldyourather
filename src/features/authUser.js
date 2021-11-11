import { createSlice } from '@reduxjs/toolkit';

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: null,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: (state, action) => {
      state = null;
      return state;
    },
    fetchAuthedUSer: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { login, logout, fetchAuthedUSer } = authUserSlice.actions;

export default authUserSlice.reducer;

export const getAuthUser = (state) => state.authUser;
