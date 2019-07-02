import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
// import rootReducer from '../reducers/index';
import createRootReducer from '../reducers/index';
// todo: Replace the above with the following:
// import rootReducer from '../reducers';
import rootSaga from '../sagas/newsSaga';

export const history = createBrowserHistory();
const preloadedState = {};

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preloadedState) {
    const store = createStore(
      createRootReducer(history),
      preloadedState,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          sagaMiddleware,
          reduxDevTools
        ),
      ),
    )
  
    return store
  }

sagaMiddleware.run(rootSaga);
