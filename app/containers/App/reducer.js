import produce from 'immer';
import { MiddleTitles } from '../../Data/MiddleTitles';
import { INCREMENT, DECREMENT } from './constants';

export const initialState = {
  titlesCount: MiddleTitles.length,
  maxTitles: MiddleTitles.length - 1,
  currentIndex: 0,
  nextIndex: 1,
  prevIndex: 4,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.currentIndex += 1;
        draft.nextIndex += 1;
        draft.prevIndex += 1;
        if (draft.currentIndex > draft.maxTitles) {
          draft.currentIndex = 0;
        }
        if (draft.nextIndex > draft.maxTitles) {
          draft.nextIndex = 0;
        }
        if (draft.prevIndex > draft.maxTitles) {
          draft.prevIndex = 0;
        }
        break;
      case DECREMENT:
        draft.currentIndex -= 1;
        draft.nextIndex -= 1;
        draft.prevIndex -= 1;
        if (draft.currentIndex === -1) {
          draft.currentIndex = draft.maxTitles;
        }
        if (draft.nextIndex === -1) {
          draft.nextIndex = draft.maxTitles;
        }
        if (draft.prevIndex === -1) {
          draft.prevIndex = draft.maxTitles;
        }
        break;
    }
  });

export default appReducer;
