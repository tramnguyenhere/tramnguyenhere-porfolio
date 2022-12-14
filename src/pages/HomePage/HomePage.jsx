import React from 'react';

import Button from '../../components/Button/Button';
import './HomePage.scss';
import data from '../../data/homepageData';

const Homepage = () => {
  return (
    <div className='homepage'>
      <h1>{data.name}</h1>
      <h1>{data.title}</h1>
      <p>"{data.subtitle}"</p>

      <div className='homepage__buttons'>
        <Button
          className='button button--pink'
          btnName='about me'
          href='#aboutme'
          id='about-me'
        />
        <Button
          className='button button--pink'
          id='my-work'
          btnName='explore my works'
          href='#works'
        />
      </div>
    </div>
  );
};

export default Homepage;
