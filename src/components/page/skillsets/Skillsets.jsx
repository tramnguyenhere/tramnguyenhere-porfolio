import React from 'react';

import { programmingLanguage, others } from '../../../data/technicalSkills';
import computer from '../../../img/computer.jpg';

import './skillsets.css';

const Skillsets = () => {
  return (
    <div id='skillsets'>
      <div className='technical-skill'>
        <h1>Is it me who are you looking for?</h1>
        <div className='technical-skill--knowledge'>
          <h3>Programming languages</h3>
          <div className='technical-skill--knowledge-list'>
            {programmingLanguage.map((item) => (
              <div key={item.code} className='technical-skill-item'>
                <img
                  alt={item.name}
                  src={`./assets/icon/skills-${item.code}.svg`}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='technical-skill--knowledge'>
          <h3>Frameworks, library, and other tools</h3>
          <div className='technical-skill--knowledge-list'>
            {others.map((item) => (
              <div key={item.id} className='technical-skill-item'>
                <img
                  alt={item.name}
                  src={`./assets/icon/skills-${item.code}.svg`}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img alt='computer' src={computer} className='decoration' />
    </div>
  );
};

export default Skillsets;
