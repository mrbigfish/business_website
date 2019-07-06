import { put, takeLatest, select } from 'redux-saga/effects'
import { questionsReceived, resetCount } from './actions'
import { GET_QUESTIONS } from './constants'
import { selectToken } from './selectors'
/**
 * GET QUESTION SAGA
 */
export function* getQuestions() {
  // const sessionToken = state => state.token.token.token
  // console.log(sessionToken)
  // const session_token = mydata.questionsinfo.difficulty;
  const tokenData = yield select(selectToken)
  const token = tokenData.token.token
  console.log(token)
  const sectionDifficulty = state => state.trivia.difficulty
  const difficulty = yield select(sectionDifficulty)
  console.log(difficulty)

  const url = `https://opentdb.com/api.php?amount=5&encode=base64&difficulty=${difficulty}&token=${token}&type=multiple`

  const json = yield fetch(url).then(
    response => response.json(),
    networkError => console.log(networkError.message),
  )
  yield put(questionsReceived(json))
  yield put(resetCount())
}

// GET TOKEN SAGA WATCHER
export default function* qetQuestionsSaga() {
  yield takeLatest(GET_QUESTIONS, getQuestions)
}