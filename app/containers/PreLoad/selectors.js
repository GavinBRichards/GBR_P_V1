import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the preLoad state domain
 */

const selectPreLoadDomain = state => state.preLoad || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PreLoad
 */

const makeSelectPreLoad = () =>
  createSelector(
    selectPreLoadDomain,
    substate => substate,
  );

export default makeSelectPreLoad;
export { selectPreLoadDomain };
