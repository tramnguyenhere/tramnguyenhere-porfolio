import React from 'react';
import AboutMe from '../aboutme/AboutMe';
import Homepage from '../homepage/Homepage';

const Layout = () => {
  return (
    <div className='layout'>
      <Homepage />
      <AboutMe />
    </div>
  );
};

export default Layout;
