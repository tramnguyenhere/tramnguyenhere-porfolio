import React from 'react';

import projects from '../../../data/projectsData';

import './works.css';

const Works = () => {
  return (
    <div id='works'>
      <div className='works'>
        <hr />
        <div className='works__heading'>
          <h2>Work</h2>
          <h1>My projects</h1>
        </div>
        <div className='works__cards'>
          {projects.map((project) => (
            <div className='works__card' key={project.id}>
              <div className='works__card--thumb'>
                <img
                  alt='project-img'
                  src={`./assets/project-thumb/${project.image}`}
                />
              </div>
              <div className='works__card--desc'>
                <h4>{project.name} </h4>
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
                  <a target='_blank' rel='noreferrer' href={project.demoLink}>
                    Demo
                  </a>
                  <a target='_blank' rel='noreferrer' href={project.sourceCode}>
                    Source code
                  </a>
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
