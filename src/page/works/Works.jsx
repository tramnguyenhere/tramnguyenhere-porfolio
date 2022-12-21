import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import projects from '../../data/projectsData';

import './Works.scss';
import Button from '../../components/Button/Button';

const Works = () => {
  return (
    <div id='works'>
      <div className='works'>
        <SectionHeading heading='my works' subHeading='my projects' />
        <div className='works__cards'>
          {projects.map((project) => (
            <div className='works__card' key={project.id}>
              <a
                target='_blank'
                rel='noreferrer'
                href={project.demoLink}
                className='works__card--thumb'
              >
                <img
                  alt='project-img'
                  src={`./assets/project-thumb/${project.image}`}
                />
              </a>
              <div className='works__card--desc'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className='work-tech'>
                  {project.tech.map((item) => (
                    <img
                      key={item}
                      alt={item}
                      src={`./assets/icon/skills-${item}.svg`}
                    />
                  ))}
                </div>

                <div className='card__buttons'>
                  <Button
                    href={project.demoLink}
                    btnName='demo'
                    className='button button--pink'
                  />
                  <Button
                    href={project.sourceCode}
                    btnName='source code'
                    id='source-code'
                    className='button button--pink'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
