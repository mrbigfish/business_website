// configureStore.js
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewareEnhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history));

const composedEnhancers = compose(
    middlewareEnhancer,
    reduxDevTools
);

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composedEnhancers
  )

  sagaMiddleware.run(rootSaga);

  return store
}