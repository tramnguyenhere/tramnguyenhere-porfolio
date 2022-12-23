import React from 'react';
import './Button.scss';

const Button = ({ href, className, id, btnName, key, onClick }) => {
  return (
    <a
      key={key}
      type='button'
      href={href}
      className={className}
      id={id}
      onClick={onClick}
    >
      {btnName}
    </a>
  );
};

export default Button;
