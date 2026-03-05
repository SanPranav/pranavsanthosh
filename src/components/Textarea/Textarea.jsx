import React from 'react';
import './Textarea.css';

const Textarea = ({ 
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 5,
  className = '',
  ...props 
}) => {
  const id = `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`textarea-group ${className}`}>
      {label && (
        <label htmlFor={id} className="textarea-label">
          {label}
          {required && <span className="textarea-required">*</span>}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="textarea-field"
        {...props}
      />
    </div>
  );
};

export default Textarea;
