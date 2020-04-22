import React from 'react';
import Spinner from '../../../components/common/Spinner';
import renderer from 'react-test-renderer';

describe('Match snapshot', () => {
  it('should match with spnapshot ', () => {
    const wrapper = new renderer.create(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
