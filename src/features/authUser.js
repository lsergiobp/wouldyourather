import { createSlice } from '@reduxjs/toolkit';

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: [],
  reducers: {
    login: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { login } = authUserSlice.actions;

export default authUserSlice.reducer;

export const getAuthUser = (state) => state.authUser;
