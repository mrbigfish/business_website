export function getQuestions(token, difficulty) {
  return {
    type: 'GET_QUESTIONS',
    token,
    difficulty,
  };
}

export function questionsReceived(data) {
  return {
    type: 'QUESTIONS_RECEIVED',
    data,
  };
}

export function questionsError(error) {
  return {
    type: 'QUESTIONS_ERROR',
    error,
  };
}

export function answerCorrect(correct, result, score) {
  return {
    type: 'ANSWER_CORRECT',
    correct,
    result,
    score,
  }
}

export function answerWrong(wrong, result) {
  return {
    type: 'ANSWER_WRONG',
    wrong,
    result
  }
}

export function updateCount(count, result, answerClicked) {
  return {
    type: 'UPDATE_COUNT',
    count,
    result,
    answerClicked,
  };
}

export function startGame(isPlaying) {
  return {
    type: 'START_GAME',
    isPlaying,
  }
}

export function updateDifficulty(difficulty) {
  return {
    type: 'UPDATE_DIFFICULTY',
    difficulty,
  }
}

export function resetCount(count) {
  return {
    type: 'RESET_COUNT',
    count,
  }
}

export function resetGame(count, result, difficulty, isPlaying, wrong, correct, score) {
  return {
    type: 'RESET_GAME',
    count,
    result,
    difficulty,
    isPlaying,
    wrong,
    correct,
    score,
  }
}



