import React from 'react';
import '../homepage/homepage.css';
import data from '../../../data/homepageData';

const Homepage = () => {
  return (
    <div className='homepage'>
      <h1>{data.title}</h1>
      <p>"{data.subtitle}"</p>

      <div className='homepage__buttons'>
        <button className='homepage__button'>
          <a href='#aboutme'>About me</a>
        </button>
        <button className='homepage__button'>
          <a href='#works'>Explore my works</a>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
