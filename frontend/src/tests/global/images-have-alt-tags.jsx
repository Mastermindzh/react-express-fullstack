import { shallow } from 'enzyme';

export default function imagesHaveAltTags(object){

    it('images should have alt tags', () => {
      const wrapper = shallow(object);
      wrapper.find('img').forEach(image => {
        expect(image.props()).toHaveProperty('alt')
      })

    });

}


