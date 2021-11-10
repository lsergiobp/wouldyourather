import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialData } from './shared';
import { saveQuestion } from '../data/service';

export const saveNewQuestion = createAsyncThunk(
  'questions/saveNewQuestion',
  async (question, thunkAPI) => {
    const newQuestion = await saveQuestion(question);
    return newQuestion;
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {},
  extraReducers: {
    [initialData]: (state, action) => {
      state = action.payload.questions;
      return state;
    },
    [saveNewQuestion.fulfilled]: (state, action) => {
      return state.concat([action.payload]);
    },
  },
});

export default questionsSlice.reducer;

export const { addQuestion } = questionsSlice.actions;
