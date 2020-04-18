import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
  const { courses } = props;

  console.log('checking courses object : ', courses);
  return (
    <div>
      <table className='table table-hover table-centered'>
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <a
                  className='btn btn-light'
                  href={'http://pluralsight.com/courses/' + course.slug}
                >
                  Watch
                </a>
              </td>

              <td>
                <Link to={'/course/' + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  //   authors: PropTypes.array.isRequired,
};
export default CourseList;
