import React from 'react';
import './Button.scss';

const Button = ({ href, className, id, btnName, key }) => {
  return (
    <a key={key} type='button' href={href} className={className} id={id}>
      {btnName}
    </a>
  );
};

export default Button;
