import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../reducers/index';
import news from '../reducers/news';
// todo: Replace the above with the following:
// import rootReducer from '../reducers';
import rootSaga from '../sagas/newsSaga';

const sagaMiddleware = createSagaMiddleware();

// const middleware = applyMiddleware(thunk, logger);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const composedEnhancers = compose(
    middlewareEnhancer,
    reduxDevTools
);

const store = createStore(
    news, // TODO: NEED TO UPDATE TO rootReducer()
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
