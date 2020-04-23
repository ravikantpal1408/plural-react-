import React from 'react';
import CourseList from '../../../components/courses/CourseList';
import {shallow} from 'enzyme';
import MockData from '../../../../tools/mockData';
import {Provider} from 'react-redux';
import configureStore from "../../../redux/configureStore";


const store = configureStore();


const props = MockData.courses;

test('should match the snapshot', () => {
    // const mockDelete = jest.fn();
    const wrapper = shallow(<Provider store={store}>
        <CourseList courses={props} onDeleteClick={jest.fn()}/>
    </Provider>);
    expect(wrapper).toMatchSnapshot();
});

test('should delete on click', () => {
    const wrapper = shallow(<CourseList courses={props} onDeleteClick={jest.fn()}/>);
    const instance = wrapper.find('.btn-outline-danger').at(1);
    console.log(instance);
});
