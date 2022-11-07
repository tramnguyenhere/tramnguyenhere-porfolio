import React from 'react';
import NavigationBar from './components/nav/Nav';
import Homepage from './components/body/homepage/Homepage';
import AboutMe from './components/body/aboutme/AboutMe';
import Works from './components/body/works/Works';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Homepage />
      <AboutMe />
      <Works />
    </div>
  );
};

export default App;
