import * as types from '../constants/actionTypes';
import * as courseApi from '../../api/courseApi';

// 👇 below is the action that call a reducer to implement state changes in store
// 👇 these are my actions
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

/* ---------------------------------------👆ACTION SECTION👆---------------------------------------------- */

/* ---------------------------------------👇THUNK SECTION👇---------------------------------------------- */

// 👇 declaring thunk
// core benefit of using thunk is that it passes 👉 dispatch 👈 as default argument
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        console.log('Error happened : ', error);
        throw error;
      });
  };
}
