import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import {save} from 'redux-localstorage-simple';

const composerEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composerEnhancers(
      applyMiddleware(save({namespace: 'todo-list'}))
    ),
  )
);

const store = configureStore({});

export default store;