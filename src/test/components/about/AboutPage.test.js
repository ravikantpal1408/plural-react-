import React from 'react';
import AboutPage from '../../../components/about/AboutPage';
import renderer from 'react-test-renderer';

// import { mount, shallow } from 'enzyme';

describe('About Page Component', () => {
  it('should match with snapshot ', () => {
    const wrapper = renderer.create(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
