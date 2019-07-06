/*
 *
 * TriviaApp reducer
 *
 */
import produce from 'immer'
import {
  GET_TOKEN,
  TOKEN_RECEIVED,
  TOKEN_ERROR,
  START_GAME,
  END_GAME,
} from './constants'

export const initialState = {
  token: false,
  loading: false,
  error: false,
  isPlaying: false,
}

/* eslint-disable default-case, no-param-reassign */
const tokenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TOKEN:
        draft.loading = true
        draft.error = false
        draft.token = false
        break

      case TOKEN_RECEIVED:
        draft.token = action.token
        draft.loading = false
        break

      case TOKEN_ERROR:
        draft.error = action.error
        draft.loading = false
        break

      case START_GAME:
        draft.isPlaying = true
        break

      case END_GAME:
        draft.isPlaying = false
        break
    }
  })

export default tokenReducer
