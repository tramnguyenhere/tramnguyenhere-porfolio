import React from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/AboutMe/AboutMe';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import Skillsets from './pages/Skillsets/Skillsets';

import './styles/App.scss';

const App = () => {
  return (
    <div className='theme'>
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
