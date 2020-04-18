import * as types from '../constants/actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors: authors };
}

/* ---------------------------------------👆ACTION SECTION👆---------------------------------------------- */

/* ---------------------------------------👇THUNK SECTION👇---------------------------------------------- */

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        console.log('all authors : ', authors);
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((err) => {
        throw err;
      });
  };
}
