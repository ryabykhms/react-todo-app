import {createStore, compose} from 'redux';
import rootReducer from './reducers/index';

const composerEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composerEnhancers(),
  )
);

const store = configureStore({});

export default store;