import React from 'react';
import '../nav/nav.css';

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
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
    </nav>
  );
};

export default NavigationBar;
