import React from 'react';
import { cn } from '../../utils';
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
  const combinedClass = cn(baseClass, variantClass, hoverClass, className);

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

// Semantic slot components
Card.Header = ({ children, className = '', ...props }) => (
  <div className={cn('card__header', className)} {...props}>
    {children}
  </div>
);

Card.Content = ({ children, className = '', ...props }) => (
  <div className={cn('card__content', className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={cn('card__footer', className)} {...props}>
    {children}
  </div>
);

export default Card;
