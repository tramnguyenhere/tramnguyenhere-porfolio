import React from 'react';
import '../homepage/homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <h1>Hello I am Tram Nguyen and a Front End Developer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus
        neque, lorem sit in mattis. Vehicula eget eget tellus purus nunc lacus,
        purus. Ut faucibus pellentesque egestas ultrices nulla sapien sed. Diam
        congue est scelerisque quam turpis. Ut faucibus pellentesque egestas
        ultrices nulla sapien sed. Diam congue est scelerisque quam turpis.
      </p>

      <div className='homepage__buttons'>
        <button className='homepage__button'>About me</button>
        <button className='homepage__button'>Explore my works</button>
      </div>
    </div>
  );
};

export default Homepage;
