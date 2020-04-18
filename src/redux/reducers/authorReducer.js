import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
