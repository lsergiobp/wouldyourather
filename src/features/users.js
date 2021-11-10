import { createSlice } from '@reduxjs/toolkit';
import { initialData } from './shared';

export const usersSlice = createSlice({
  name: 'authUser',
  initialState: [],
  reducers: {},
  extraReducers: {
    [initialData]: (state, action) => {
      state = action.payload.users;
      return state;
    },
  },
});

export default usersSlice.reducer;
