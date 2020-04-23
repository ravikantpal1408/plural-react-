import React from 'react';
import CourseList from '../../../components/courses/CourseList';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
import MockData from '../../../../tools/mockData';

const props = MockData.courses;

test('should match the snapshot', () => {
  const mockDelete = jest.fn();
  const wrapper = shallow(
    <CourseList courses={props} onDeleteClick={mockDelete} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should delete on click', () => {
  const wrapper = shallow(<CourseList courses={props} />);
  const instance = wrapper.find('.btn-outline-danger').at(1);
  console.log(instance);
});
