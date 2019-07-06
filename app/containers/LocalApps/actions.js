/*
 *
 * TriviaApp actions
 *
 */

import {
  GET_TOKEN,
  TOKEN_RECEIVED,
  TOKEN_ERROR,
  START_GAME,
  END_GAME,
} from './constants'

export function getToken() {
  return {
    type: GET_TOKEN,
  }
}

export function tokenReceived(token) {
  return {
    type: TOKEN_RECEIVED,
    token,
  }
}

export function tokenError(error) {
  return {
    type: TOKEN_ERROR,
    error,
  }
}

export function startGame(isPlaying) {
  return {
    type: START_GAME,
    isPlaying,
  }
}

export function endGame(isPlaying) {
  return {
    type: END_GAME,
    isPlaying,
  }
}
