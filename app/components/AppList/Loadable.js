/**
 *
 * Asynchronously loads the component for AppList
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
