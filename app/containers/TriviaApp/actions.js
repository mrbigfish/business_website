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

export function getQuestions() {
  return {
    type: GET_QUESTIONS,
  }
}

export function questionsReceived(questions) {
  return {
    type: QUESTIONS_RECEIVED,
    questions,
  }
}

export function questionsError(error) {
  return {
    type: QUESTIONS_ERROR,
    error,
  }
}

export function answerCorrect(correct, result, score) {
  return {
    type: ANSWER_CORRECT,
    correct,
    result,
    score,
  }
}

export function answerWrong(wrong, result) {
  return {
    type: ANSWER_WRONG,
    wrong,
    result,
  }
}

export function updateCount(count, result, answerClicked) {
  return {
    type: UPDATE_COUNT,
    count,
    result,
    answerClicked,
  }
}

export function updateDifficulty(difficulty) {
  return {
    type: UPDATE_DIFFICULTY,
    difficulty,
  }
}

export function resetCount(count) {
  return {
    type: RESET_COUNT,
    count,
  }
}

export function resetGame(
  count,
  result,
  difficulty,
  isPlaying,
  wrong,
  correct,
  score,
) {
  return {
    type: RESET_GAME,
    count,
    result,
    difficulty,
    isPlaying,
    wrong,
    correct,
    score,
  }
}
