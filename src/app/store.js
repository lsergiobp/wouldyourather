import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from '../features/users';
import questionsReducer from '../features/questions';
import authUserSlice from '../features/authUser';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    users: usersReducer,
    questions: questionsReducer,
    authUser: authUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});
