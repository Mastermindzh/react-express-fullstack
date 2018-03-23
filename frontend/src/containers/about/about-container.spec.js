import React from 'react';
import AboutPage from './about-container.jsx';
import { imagesShouldHaveAltTags } from './../../tests';


describe('<AboutPage />', () => {

  imagesShouldHaveAltTags(<AboutPage />);

});
