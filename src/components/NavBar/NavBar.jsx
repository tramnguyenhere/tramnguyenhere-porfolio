import React from 'react';
import './NavBar.scss';
import Button from '../Button/Button';

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__brand'>
        <div className='navbar__brand--logo'></div>
        <span className='navbar__brand--name'>tramnguyenhere</span>
      </div>
      <div className='navbar__list'>
        <Button className='link' href='/' btnName='home' />
        <Button className='link' href='#aboutme' btnName='my story' />
        <Button className='link' href='#skillsets' btnName='my skills' />
        <Button className='link' href='#works' btnName='my works' />
        <Button className='link' href='#contact' btnName='contact' />
      </div>
      <div>
        <Button btnName='Download CV' className='button button--white' />
      </div>
    </nav>
  );
};

export default NavigationBar;
