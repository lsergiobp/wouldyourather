import { createAction } from '@reduxjs/toolkit';
import { formatQuestionList } from '../helpers/dataHelper';

export const initialData = createAction('initialData');

export const getAllUsers = (state) => state.users;
export const getAllQuestions = (state) =>
  formatQuestionList(state.questions, state.users, state.authUser);
export const isLoading = (state) => state.loading;
