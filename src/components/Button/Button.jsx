import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  const combinedClass = cn(baseClass, variantClass, sizeClass, disabledClass, className);

  if (href) {
    return (
      <Link to={href} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={combinedClass} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
