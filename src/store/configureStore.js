import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import axios from 'axios'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const accessToken = (store) => (next) => (action) => {
  axios.defaults.headers.common['x-auth'] = store.getState().auth.token ?
    store.getState().auth.token : null;
  return next(action);
};

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk, accessToken))
  );

  return store;
};
