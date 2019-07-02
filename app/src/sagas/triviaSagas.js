import { put, takeLatest, select } from 'redux-saga/effects';
import { tokenReceived } from '../actions/tokenActions';
import { questionsReceived, resetCount } from '../actions/questionsActions';

/**
 * GET TOKEN SAGA
 * */ 
function* getToken() {
  const url = "https://opentdb.com/api_token.php?command=request";
  
  const json = yield fetch(url)
  .then(response => response.json(), networkError => console.log(networkError));    
  yield put(tokenReceived(json));
}

// GET TOKEN SAGA WATCHER
export function* getTokenSaga() {
     yield takeLatest('GET_TOKEN', getToken)
}

/**
 * GET QUESTION SAGA
 */
function* getQuestions() {
  const session_token = (state) => state.tokeninfo.data.token;
  // const session_token = mydata.questionsinfo.difficulty;
  const section_difficulty = (state) => state.questionsinfo.difficulty;
  const token = yield select(session_token);
  const difficulty = yield select(section_difficulty);

  const url = `https://opentdb.com/api.php?amount=5&encode=base64&difficulty=${difficulty}&token=${token}&type=multiple`;
  
  const json = yield fetch(url)
  .then(response => response.json(), networkError => console.log(networkError.message));    
  yield put(questionsReceived(json));
  yield put(resetCount());
}

// GET TOKEN SAGA WATCHER
export function* qetQuestionsSaga() {
     yield takeLatest('GET_QUESTIONS', getQuestions)
}

