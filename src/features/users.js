import { createSlice } from '@reduxjs/toolkit';
import { initialData } from './shared';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchUsers: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  extraReducers: {
    [initialData]: (state, action) => {
      state = action.payload.users;
      return state;
    },
  },
});

export default usersSlice.reducer;

export const { fetchUsers } = usersSlice.actions;
