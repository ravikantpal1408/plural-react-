import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  authors: authors,
  courses: courses,
});

export default rootReducer;
