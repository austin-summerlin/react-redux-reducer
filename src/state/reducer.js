/* eslint-disable keyword-spacing */
import { UNDO, REDO, RECORD } from './actions';

export const intialState = {
  before: [],
  current: '#FF0000',
  after: []
};

export const reducer = (state, action) => {
  const { before, current, after } = state;

  switch (action.type) {
    case UNDO:
      return {
        ...state,
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1)
      };
    case REDO:
      return {
        ...state,
        before: [...before, current],
        current: after[0],
        after: after.slice(1)
      };
    case RECORD:
      return {
        ...state,
        before: [...before, current],
        current: action.payload
      };
    default:
      return state;
  }
};
