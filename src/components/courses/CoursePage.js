import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
      },
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();

    const course = { ...this.state.course, title: e.target.value };
    // console.log('course :- ', course);
    this.setState({ course });
    // console.log('spread state : ', ...this.state.course);
  };

  handleSubmit(e) {
    e.preventDefault();
    // console.log('submit', this.state.course.title); 👈
    // alert(this.state.course.title); 🤷‍♂️
    // this.props.dispatch(courseActions.createCourse(this.state.course)); 👈 now this becomes obsolete
    this.props.actions.createCourse(this.state.course);
    this.setState({
      course: {
        title: '',
      },
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses </h2>
          <h3>Add Course</h3>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type='submit' value='save' />
          {this.props.courses.map((course) => (
            <div key={course.title}> {course.title}</div>
          ))}
        </form>
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired, 👈 now this becomes obsolete
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { courses: state.courses };
}

// sending data to store
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
