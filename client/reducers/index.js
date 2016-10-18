import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise(), ReduxThunk, createLogger())(createStore);

const rootReducer = combineReducers({
  
});

export default createStoreWithMiddleware(rootReducer);
