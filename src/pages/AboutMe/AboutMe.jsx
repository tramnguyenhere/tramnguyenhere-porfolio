import React from 'react';

import Button from '../../components/Button/Button';
import passion from '../../img/direction.jpg';
import data from '../../data/aboutMeData';

import './AboutMe.scss';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const AboutMe = () => {
  return (
    <div id='aboutme'>
      <div className='aboutme'>
        <SectionHeading heading='about me' subHeading={data.headline} />
        <div className='aboutme__story'>
          <div className='aboutme__story--journey'>
            <p>{data.story}</p>
            <p>{data.skillsets}</p>
            <strong>{data.objective}</strong>
          </div>
          <div className='aboutme__story--passion'>
            <img src={passion} alt='passion' />
            <h4>
              Computer <br />
              Sciences
            </h4>
            <Button
              className='button button--pink'
              btnName='explore my skills'
              href='#skillsets'
              id='aboutme__skillsets'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
