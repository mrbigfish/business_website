/**
 *
 * Asynchronously loads the component for TriviaApp
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
