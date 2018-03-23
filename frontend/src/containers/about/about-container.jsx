import React from 'react';
import image from './../../assets/images/image.ico';


const AboutPage = () => {
  return (
    <div>
      <h1>I am GROOT</h1>
      <p>
        I am not groot, I&#39;m a simple about page with a tiny icon on it
      </p>
      <img src ={image} alt = "static image"/>
    </div>
  );
};

export default AboutPage;
