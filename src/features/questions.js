import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialData } from './shared';
import { saveAnswer, saveQuestion } from '../data/service';

export const saveNewQuestion = createAsyncThunk(
  'questions/saveNewQuestion',
  async (question, thunkAPI) => {
    const newAnswer = await saveQuestion(question);
    return newAnswer;
  }
);

export const saveNewAnswer = createAsyncThunk(
  'questions/saveNewAnswer',
  async (answer, thunkAPI) => {
    const newQuestion = await saveAnswer(answer);
    return newQuestion;
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    fetchQuestions: (state, action) => {
      state = action.payload;
      return state;
    },
  },
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

export const { fetchQuestions } = questionsSlice.actions;
