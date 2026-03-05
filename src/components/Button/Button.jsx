import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
