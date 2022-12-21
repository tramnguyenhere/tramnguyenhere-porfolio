import React from 'react';
import './Button.scss';

const Button = ({ href, className, id, btnName, onMouseOver, onMouseOut }) => {
  return (
    <a
      type='button'
      href={href}
      className={className}
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {btnName}
    </a>
  );
};

export default Button;
