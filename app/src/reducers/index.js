import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import newsReducer from './news';
import questionsReducer from './questions';
import tokenReducer from './token';
// import lifecycleReducer from './lifecycle';

const rootReducer = (history) => combineReducers({
  news: newsReducer,
  questionsinfo: questionsReducer,
  tokeninfo: tokenReducer,
  // lifecycle: lifecycleReducer,
  router: connectRouter(history)
})

export default rootReducer;