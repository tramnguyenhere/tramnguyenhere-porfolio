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
          <li className='navbar__link' active href='/'>
            Home
          </li>

          <li className='navbar__link' active href='/'>
            About me
          </li>

          <li className='navbar__link' active href='/'>
            Project
          </li>

          <li className='navbar__link' active href='/'>
            Contact
          </li>
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
