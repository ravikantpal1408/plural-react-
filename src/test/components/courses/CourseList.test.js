import React from 'react';
import CourseList from '../../../components/courses/CourseList';
// import { shallow } from 'enzyme';
import MockData from '../../../../tools/mockData';
// import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore();

const props = {
  courses: MockData.courses.map((c) => {
    return {
      ...c,
      authorName: MockData.authors.find((a) => a.id === c.authorId).name,
    };
  }),
  onDeleteClick: jest.fn(),
};

test('should match the snapshot', () => {
  // const mockDelete = jest.fn();
  const wrapper = renderer.create(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});

test('should delete on click', () => {
  const wrapper = renderer.create(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );
  console.log(wrapper);

});
