import React from 'react';
import Tabs from '../Tabs/Tabs';
import { getGalleryCategories } from '../../data/galleryData';
import { cn } from '../../utils/cn';
import './GalleryFilter.css';

/**
 * GalleryFilter component for category-based filtering.
 * Reference: Hick's Law - reduce decision paralysis by chunking
 * Uses Tabs for clear, accessible category selection.
 * Reference: shadcn/ui Tabs pattern
 */
const GalleryFilter = ({ 
  activeCategory = 'All', 
  onCategoryChange,
  className = '',
}) => {
  const categories = getGalleryCategories();

  // Create tab structure for Tabs component
  const tabs = categories.map(category => ({
    value: category,
    label: category,
    content: null, // Not used in filter context
  }));

  return (
    <div className={cn('gallery-filter', className)}>
      <Tabs
        tabs={tabs}
        defaultValue={activeCategory}
        onValueChange={onCategoryChange}
      />
    </div>
  );
};

export default GalleryFilter;
