import React from 'react';
import NavigationBar from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Homepage from './page/homepage/Homepage';
import AboutMe from './page/aboutme/AboutMe';
import Works from './page/works/Works';
import Contact from './page/contact/Contact';
import Skillsets from './page/skillsets/Skillsets';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Homepage />
      <AboutMe />
      <Skillsets />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
