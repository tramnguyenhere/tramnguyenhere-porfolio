import React from 'react';

import passion from '../../../img/direction.jpg';
import data from '../../../data/aboutMeData';

import '../aboutme/aboutme.css';
import Skillsets from '../skillsets/Skillsets';

const AboutMe = () => {
  return (
    <div id='aboutme'>
      <div className='aboutme'>
        <hr />
        <div className='aboutme__heading'>
          <h2>About Me</h2>
          <h1>{data.headline}</h1>
        </div>
        <div className='aboutme__story'>
          <div className='aboutme__story--history'>
            <p>{data.story}</p>
            <p>
              {data.skillsets}
              <span>{data.objective}</span>
            </p>
            <button className='aboutme__skillsets'>
              <a href='#skillsets'>Explore My Skills</a>
            </button>
          </div>
          <div className='aboutme__story--passion'>
            <img src={passion} alt='passion' />
            <h4>
              Computer <br />
              Sciences
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
