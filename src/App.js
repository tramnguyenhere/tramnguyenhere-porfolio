import React from 'react';
import NavigationBar from './components/nav/Nav';
import Homepage from './components/page/homepage/Homepage';
import AboutMe from './components/page/aboutme/AboutMe';
import Works from './components/page/works/Works';
import Contact from './components/page/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Homepage />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
