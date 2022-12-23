import React, { useState } from 'react';
import Button from '../Button/Button';
import data from '../../data/navbarData';
import './NavBar.scss';

const NavigationBar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    setNavVisible(!navVisible);
  };

  const closeNav = (e) => {
    setNavVisible(false);
  };

  return (
    <nav className='navbar'>
      <div
        className={`navbar__overlay ${navVisible && 'visible'}`}
        onClick={toggleHandler}
      ></div>
      <div className='navbar__brand'>
        <div className='navbar__brand--logo'></div>
        <span className='navbar__brand--name'>tramnguyenhere</span>
      </div>
      <div className={`navbar__toggle ${navVisible && 'hidden'}`}>
        <Button
          className='button'
          id='toggle'
          btnName={<i className='fa-solid fa-bars'></i>}
          onClick={toggleHandler}
        />
      </div>
      <div className={`navbar__list ${!navVisible && 'hidden'}`}>
        <Button
          btnName={<i className='fa-sharp fa-solid fa-square-xmark'></i>}
          id='closeNav'
          className='button button--white'
          onClick={closeNav}
        />
        {data.map((item) => (
          <div key={item.id}>
            <Button
              className='link'
              href={item.href}
              btnName={item.name}
              onClick={closeNav}
            />
          </div>
        ))}
        <Button
          btnName='Download CV'
          className='button button--white'
          id='downloadCV'
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
