import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});
