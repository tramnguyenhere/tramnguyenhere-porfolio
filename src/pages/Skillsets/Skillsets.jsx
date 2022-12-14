import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { programmingLanguage, others } from '../../data/technicalSkills';
import computer from '../../img/computer.jpg';

import './Skillsets.scss';

const Skillsets = () => {
  return (
    <div id='skillsets'>
      <div className='skillsets__wrapper'>
        <div className='technical-skill'>
          <SectionHeading
            heading='my skillsets'
            subHeading='Is it me who are you looking for?'
          />
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
    </div>
  );
};

export default Skillsets;
