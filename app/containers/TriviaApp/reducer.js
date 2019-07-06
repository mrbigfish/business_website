/*
 *
 * TriviaApp reducer
 *
 */
import produce from 'immer'
import {
  GET_QUESTIONS,
  QUESTIONS_RECEIVED,
  QUESTIONS_ERROR,
  ANSWER_CORRECT,
  ANSWER_WRONG,
  UPDATE_COUNT,
  RESET_COUNT,
  UPDATE_DIFFICULTY,
  RESET_GAME,
} from './constants'

const initialState = {
  loading: false,
  error: false,
  questions: false,
  correct: 0,
  wrong: 0,
  result: '',
  count: 0,
  difficulty: 'easy',
  answerClicked: false,
  score: 0,
}

/* eslint-disable default-case, no-param-reassign */
const triviaReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_QUESTIONS:
        draft.loading = true
        draft.error = false
        draft.questions = false
        break

      case QUESTIONS_RECEIVED:
        draft.questions = action.questions
        draft.loading = false
        break

      case QUESTIONS_ERROR:
        draft.error = action.error
        draft.loading = false
        break

      case ANSWER_CORRECT:
        let points = 0
        if (state.difficulty === 'easy') points = 25
        if (state.difficulty === 'medium') points = 50
        if (state.difficulty === 'hard') points = 100
        draft.correct += 1
        draft.result = 'right'
        draft.answerClicked = true
        draft.score += points
        /*       return {
          ...state,
          correct: state.correct + 1,
          result: 'right',
          answerClicked: true,
          score: state.score + points,
        } */
        break

      case ANSWER_WRONG:
        return {
          ...state,
          wrong: state.wrong + 1,
          result: 'missed',
          answerClicked: true,
        }

      case UPDATE_COUNT:
        return {
          ...state,
          count: state.count + 1,
          result: '',
          answerClicked: false,
        }
      case RESET_COUNT:
        return { ...state, count: 0, result: '', answerClicked: false }
      case UPDATE_DIFFICULTY:
        if (state.difficulty === 'easy')
          return { ...state, difficulty: 'medium' }
        if (state.difficulty === 'medium')
          return { ...state, difficulty: 'hard' }
        if (state.difficulty === 'hard') return { ...state, difficulty: 'easy' }
        break
      case RESET_GAME:
        return {
          ...state,
          count: 0,
          result: '',
          difficulty: 'easy',
          wrong: 0,
          correct: 0,
          score: 0,
        }
    }
  })

export default triviaReducer
