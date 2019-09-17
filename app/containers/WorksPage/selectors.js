import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';

/**
 * Direct selector to the worksPage state domain
 */

const selectWorksPageDomain = state => state.worksPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectTitlesCount = () =>
  createSelector(
    selectWorksPageDomain,
    testState => testState.titlesCount,
  );

const makeSelectCurrentIndex = () =>
  createSelector(
    selectWorksPageDomain,
    testState => testState.currentIndex,
  );

const makeSelectNextIndex = () =>
  createSelector(
    selectWorksPageDomain,
    testState => testState.nextIndex,
  );

const makeSelectPrevIndex = () =>
  createSelector(
    selectWorksPageDomain,
    testState => testState.prevIndex,
  );

/**
 * Default selector used by WorksPage
 */

const makeSelectWorksPage = () =>
  createSelector(
    selectWorksPageDomain,
    substate => substate,
  );

export default makeSelectWorksPage;
export {
  selectWorksPageDomain,
  makeSelectTitlesCount,
  makeSelectCurrentIndex,
  makeSelectNextIndex,
  makeSelectPrevIndex,
};
