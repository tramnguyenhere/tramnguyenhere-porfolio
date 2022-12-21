import React from 'react';

import data from '../../data/contactData';

import './Contact.scss';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact__wrapper'>
        <h1>Get in Touch</h1>
        <div className='contact__buttons'>
          {data.map((item) => (
            <Button
              key={item.name}
              className='button button--white contact-info'
              href={item.url}
              btnName={<i className={item.faIcon}></i>}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
