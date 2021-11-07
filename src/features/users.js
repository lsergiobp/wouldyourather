import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
});

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;

export const { initialData } = usersSlice.actions;
