import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './error-container.jsx';

describe('<ErrorPage />', () => {
  it('should have a H1 with the "error-code" class', () => {
    const wrapper = shallow(<ErrorPage />);
    const actual = wrapper.find('h1');

    expect(actual.hasClass('error-code')).toBeTruthy();
  });

});
