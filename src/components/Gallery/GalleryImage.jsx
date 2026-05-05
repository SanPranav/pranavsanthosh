import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './GalleryImage.css';

/**
 * GalleryImage component for individual gallery items.
 * Reference: Gestalt Principle of Similarity (consistent presentation)
 * Includes hover overlay with title and click handler for lightbox.
 * Implements lazy loading for performance optimization.
 */
const GalleryImage = ({ 
  image, 
  onClick,
  loading = 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="gallery-image"
      style={{ aspectRatio: image.aspect || 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="gallery-image__skeleton" />
      )}

      {/* Image with lazy loading */}
      <img
        src={image.src}
        alt={image.title}
        className={cn(
          'gallery-image__img',
          isLoaded && 'gallery-image__img--loaded'
        )}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Hover overlay with title and category */}
      <motion.div
        className="gallery-image__overlay"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="gallery-image__content">
          <h3 className="gallery-image__title">{image.title}</h3>
          {image.description && (
            <p className="gallery-image__description">{image.description}</p>
          )}
          <span className="gallery-image__category">{image.category}</span>
        </div>
      </motion.div>

      {/* Click target */}
      <button
        className="gallery-image__button"
        onClick={() => onClick(image)}
        aria-label={`View full size: ${image.title}`}
      />
    </motion.div>
  );
};

export default GalleryImage;
