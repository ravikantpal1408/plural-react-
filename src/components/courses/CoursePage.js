import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import CourseList from './CourseList';

class CoursePage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    // console.log('courses length : ', courses.length);

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Loading authors failed' + error);
      });
    }

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Loading courses failed' + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // courses: state.courses,

    courses: state.courses.map((course) => {
      return {
        ...course,
        authorName: state.authors.find((a) => a.id === course.authorId) || {},
      };
    }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
