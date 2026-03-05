import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) => {
  const baseClass = 'card';
  const variantClass = `card--${variant}`;
  const hoverClass = hover ? 'card--hoverable' : '';
  const combinedClass = `${baseClass} ${variantClass} ${hoverClass} ${className}`.trim();

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
