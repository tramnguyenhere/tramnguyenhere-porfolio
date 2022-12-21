import React from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './page/HomePage/HomePage';
import AboutMe from './page/AboutMe/AboutMe';
import Works from './page/Works/Works';
import Contact from './page/Contact/Contact';
import Skillsets from './page/Skillsets/Skillsets';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HomePage />
      <AboutMe />
      <Skillsets />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
