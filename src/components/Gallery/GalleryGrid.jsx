import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';
import { cn } from '../../utils/cn';
import './GalleryGrid.css';

/**
 * GalleryGrid component with responsive masonry layout.
 * Reference: Gestalt Principle of Similarity + Visual hierarchy
 * Uses CSS Grid with auto-fit for responsive behavior.
 * Implements lazy loading for performance optimization.
 */
const GalleryGrid = ({ 
  images, 
  onImageClick,
  className = '',
}) => {
  // Memoize to prevent unnecessary re-renders
  // Reference: React performance optimization
  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => (a.aspect || 1) - (b.aspect || 1));
  }, [images]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className={cn('gallery-grid', className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sortedImages.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
        >
          <GalleryImage
            image={image}
            onClick={onImageClick}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
