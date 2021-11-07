import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sharedReducer from '../features/shared';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    //users: usersReducer,
    shared: sharedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});
