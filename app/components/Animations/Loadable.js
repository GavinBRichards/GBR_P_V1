/**
 *
 * Asynchronously loads the component for Animations
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
