import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, getQuestions } from '../data/service';
import { initialData } from './shared';
import { saveNewQuestion, saveNewAnswer } from './questions';

export const getInitialData = createAsyncThunk(
  'loading/initialData',
  async (_, thunkAPI) => {
    let users = await getUsers();
    let questions = await getQuestions();
    let dataToDispatch = {
      users: users,
      questions: questions,
    };
    await thunkAPI.dispatch(initialData(dataToDispatch));
  }
);

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {},
  extraReducers: {
    [getInitialData.fulfilled]: (state, action) => {
      state = false;
      return state;
    },
    [saveNewQuestion.pending]: (state, action) => {
      state = true;
      return state;
    },
    [saveNewQuestion.fulfilled]: (state, action) => {
      state = false;
      return state;
    },
    [saveNewAnswer.pending]: (state, action) => {
      console.log('pending');
      state = true;
      return state;
    },
    [saveNewAnswer.fulfilled]: (state, action) => {
      console.log('fim');
      state = false;
      return state;
    },
  },
});

export default loadingSlice.reducer;
