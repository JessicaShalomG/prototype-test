import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import sessionReducer from 'reducers/session';

const middlewares = [];

middlewares.push(logger);

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: new MiddlewareArray().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
