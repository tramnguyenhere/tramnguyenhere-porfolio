import React, { useState } from 'react';
import '../nav/nav.css';

const NavigationBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <nav className='navbar'>
      <div className='navbar__brand'>
        <div className='navbar__brand--logo'></div>
        <span className='navbar__brand--name'>tramnguyenhere</span>
      </div>
      <div className='navbar__list'>
        <ul>
          <a className='navbar__link' active href='/'>
            home
          </a>

          <a className='navbar__link' active href='#aboutme'>
            my story
          </a>

          <a className='navbar__link' active href='#skillsets'>
            my skills
          </a>

          <a className='navbar__link' active href='#works'>
            my works
          </a>

          <a className='navbar__link' active href='/'>
            contact
          </a>
        </ul>
      </div>
      <div>
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className='navbar__button'
        >
          <span
            className={`navbar__button--title ${isHovering ? 'hidden' : ''}`}
          >
            Download CV
          </span>
          <i
            className={`fa fa-arrow-circle-down navbar__button--icon ${
              isHovering ? '' : 'hidden'
            }`}
            aria-hidden='true'
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
