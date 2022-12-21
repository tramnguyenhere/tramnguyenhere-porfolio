import React from 'react';
import './SectionHeading.scss';

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className='heading__wrapper'>
      <hr />
      <div className='heading'>
        <h2>{heading}</h2>
        <h1>{subHeading}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
