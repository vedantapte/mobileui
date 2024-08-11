import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

import logger from 'redux-logger';

import initialState from './initialState';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['yourIgnoredActionType'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['yourReducerSlice.ignoredField'],
        // Ignore these paths in the state
        ignoredPaths: ['yourReducerSlice.ignoredPath'],
      },
    }).concat(logger),
});

export default store;
