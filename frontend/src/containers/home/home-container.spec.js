import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../../components/layout/footer.jsx';
import   {HomePage}  from "./home-container.jsx";

describe('<HomePage />', () => {

  it("should contain <Footer />", () => {

    const wrapper = shallow(<HomePage />)

    expect(wrapper.find(Footer).length).toEqual(1);
  });


  // it("should match snapshot", () => {
  //   // const store = configureMockStore()({color: "red"});
  //   const mockStore = configureStore([])
  //   const store = mockStore({colorReducer: {color: "red"}});


  //   // color: PropTypes.string,
  //   // changeColor: PropTypes.func
  //   const component = create(
  //     <Provider store={store}>
  //       <ConnectedHomePage />
  //     </Provider>
  //   );

  //   const tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();

  // });
});



