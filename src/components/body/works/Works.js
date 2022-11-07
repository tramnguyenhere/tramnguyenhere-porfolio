import React from 'react';
import '../works/works.css';

const Works = () => {
  return (
    <div className='works'>
      <hr />
      <div className='works__heading'>
        <h2>Work</h2>
        <h1>My project</h1>
      </div>
      <div className='works__card'>
        <div className='works__card--thumb'></div>
        <div className='works__card--desc'>
          <h4>Nama Project</h4>
          <div className='card__buttons'>
            <button>Demo</button>
            <button>Source code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
