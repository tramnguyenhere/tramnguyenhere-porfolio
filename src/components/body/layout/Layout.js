import React from 'react';
import AboutMe from '../aboutme/AboutMe';
import Homepage from '../homepage/Homepage';
import Works from '../works/Works';

const Layout = () => {
  return (
    <div className='layout'>
      <Homepage />
      <AboutMe />
      <Works />
    </div>
  );
};

export default Layout;
