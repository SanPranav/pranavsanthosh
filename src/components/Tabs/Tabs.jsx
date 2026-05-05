import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Tabs.css';

/**
 * Tabs component with Radix UI patterns and Framer Motion.
 * Reference: shadcn/ui Tabs - accessible tabbed content
 * Enforces semantic HTML and keyboard navigation.
 * Applies Hick's Law: reduces choices per section with progressive disclosure
 */
const Tabs = ({
  tabs,
  defaultValue = null,
  onValueChange,
  className = '',
}) => {
  const [activeValue, setActiveValue] = useState(defaultValue || (tabs[0]?.value ?? null));

  const handleChange = (value) => {
    setActiveValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  const activeTab = tabs.find(t => t.value === activeValue);

  return (
    <div className={cn('tabs', className)}>
      {/* Tab List - semantic role and ARIA attributes */}
      <div className="tabs__list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeValue === tab.value}
            aria-controls={`tab-panel-${tab.value}`}
            className={cn(
              'tabs__trigger',
              activeValue === tab.value && 'tabs__trigger--active'
            )}
            onClick={() => handleChange(tab.value)}
          >
            <span className="tabs__trigger-text">{tab.label}</span>
            {/* Active indicator with animation */}
            {activeValue === tab.value && (
              <motion.div
                className="tabs__trigger-indicator"
                layoutId="tabs-indicator"
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="tabs__panel"
        id={`tab-panel-${activeValue}`}
        role="tabpanel"
        tabIndex={0}
      >
        {activeTab && (
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {activeTab.content}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
