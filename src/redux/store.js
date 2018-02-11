import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewares = [
  logger
  thunk,
];



export default createStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);
