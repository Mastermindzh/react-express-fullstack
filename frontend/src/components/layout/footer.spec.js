import React from 'react';
import { shallow } from 'enzyme';
import  Footer  from "./footer.jsx";

describe('<HomePage />', () => {

  it("should contain <footer>", () => {

    const wrapper = shallow(<Footer />)

    expect(wrapper.find('footer').length).toEqual(1);
  });

});
