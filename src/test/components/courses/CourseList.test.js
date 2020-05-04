import React from 'react';
import CourseList from '../../../components/courses/CourseList';
// import { shallow } from 'enzyme';
import MockData from '../../../../tools/mockData';
// import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

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
  // if (props.courses.length > 0) {
  console.log('just testing');
  const wrapper = renderer.create(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
  // } else {
  // }
});

test('should delete on click', () => {
  const mockFuncDoSomething = jest.fn();
  CourseList.prototype.onDeleteClick = jest.fn();
  const wrapper = shallow(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );

  // wrapper.find('button').first().at(0).simulate('click');

  // wrapper.find('.btn-outline-danger').simulate('click');

  // expect(wrapper.context).toHaveBeenCalled();
});

/// 👇 my test to test that isolated function call
test('test for anonymouse function ... ', () => {
  CourseList.prototype.someAnonymousFunctions = jest.fn();
  const wrapper = shallow(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );
});
