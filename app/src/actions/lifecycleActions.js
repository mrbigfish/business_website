export function updateCount(count) {
  return {
    type: 'UPDATE_COUNT',
    count
  };
}

export function startGame() {
  return {
    type: 'START_GAME',
  }
}

export function updateDifficulty() {
  return {
    type: 'UPDATE_DIFFICULTY',
  }
}