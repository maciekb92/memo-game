import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const middleWares = [
    process.env.NODE_ENV === 'development' && logger
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({reducer: rootReducer}, undefined, composedEnhancers);
