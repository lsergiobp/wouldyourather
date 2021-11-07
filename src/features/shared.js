import { createSlice } from '@reduxjs/toolkit';

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: { users: [] },
  reducers: {
    initialData: (state, action) => {
      state = {
        users: action.payload,
      };
      return state;
    },
  },
});

export const getAllUsers = (state) => state.shared.users;

export default sharedSlice.reducer;

export const { initialData } = sharedSlice.actions;
