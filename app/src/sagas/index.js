import { all, fork } from 'redux-saga/effects';
import * as newsSagas from './newsSagas';
import * as triviaSagas from './triviaSagas';

// Fork all Sagas as an Object from each imported Saga file
export default function* rootSaga() {
  yield all([
    ...Object.values(newsSagas),
    ...Object.values(triviaSagas),
  ].map(fork));
}

/** NOTE FOR THE ABOVE FORK FUNCTION ***
 * The above is just a simplified version of the following fork methods type:
 *  export default function* rootSaga() { 
 *    yield all([
 *      fork(newsSaga1),
 *      fork(newsSaga2),
 *      fork(newsSaga...),        //additional Sagas exported from newsSagas
 *      fork(weatherSaga1),
 *      fork(weatherSaga2),
 *      fork(weatherSaga...),     //additional Sagas exported from weatherSagas
 *      fork(triviaSaga1)
 *      fork(triviaSaga2),
 *      fork(triviaSaga...),      //additional Sagas exported from triviaSagas
 *      ...                       //additional forking of other Sagas Exported
 *    ])
 *  }
 * 
 */