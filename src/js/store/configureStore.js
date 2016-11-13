// ==========================
// ./store/configureStore.js
// ==========================

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { HYDRATE } from '../constants/index';


import createLogger from 'redux-logger';
let logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
});

const enhancer = compose(applyMiddleware(logger));


const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer);

export default configureStore();
