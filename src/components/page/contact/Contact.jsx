import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__wrapper'>
        <h1>Get in Touch</h1>
        <div className='contact__buttons'>
          <button>
            <i class='fa-solid fa-envelope'></i>
          </button>
          <button>
            <i class='fa-solid fa-phone'></i>
          </button>
          <button>
            <i class='fa-brands fa-github'></i>
          </button>
          <button>
            <i class='fa-brands fa-linkedin'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
