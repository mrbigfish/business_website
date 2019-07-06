import { createSelector } from 'reselect'
import { initialState } from '../LocalApps/reducer'

/**
 * Direct selector to the triviaApp state domain
 */

const selectToken = state => state.token || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by TriviaApp
 */

const makeSelectGetToken = () =>
  createSelector(
    selectToken,
    tokenState => tokenState.token,
  )

const makeSelectStartGame = () =>
  createSelector(
    selectToken,
    tokenState => tokenState.isPlaying,
  )

export { selectToken, makeSelectGetToken, makeSelectStartGame }
