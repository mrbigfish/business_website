import { put, takeLatest /* , select */ } from 'redux-saga/effects'
import { tokenReceived, startGame } from './actions'
import { GET_TOKEN } from './constants'
// import { questionsReceived, resetCount } from './actions'

/**
 * GET TOKEN SAGA
 * */

export function* getToken() {
  const url = 'https://opentdb.com/api_token.php?command=request'

  const json = yield fetch(url).then(
    response => response.json(),
    // networkError => console.log(networkError),
  )
  yield put(tokenReceived(json))
  yield put(startGame())
}

// GET TOKEN SAGA WATCHER
// Individual exports for testing
export default function* getTokenSaga() {
  yield takeLatest(GET_TOKEN, getToken)
}
