/**
 *
 * Asynchronously loads the component for LocalApps
 *
 */

import loadable from 'utils/loadable'

export default loadable(() => import('./index'))
