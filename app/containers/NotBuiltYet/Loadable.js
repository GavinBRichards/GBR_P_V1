/**
 *
 * Asynchronously loads the component for NotBuiltYet
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
