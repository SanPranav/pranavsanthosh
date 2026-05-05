import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Dialog from '../Dialog/Dialog';
import { cn } from '../../utils/cn';
import './GalleryLightbox.css';

/**
 * GalleryLightbox component for full-screen image viewing.
 * Reference: shadcn/ui Dialog + Fitts's Law (large navigation targets)
 * Includes keyboard navigation (arrow keys, ESC)
 * Provides rich metadata display and context.
 */
const GalleryLightbox = ({ 
  isOpen, 
  currentImage, 
  images,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update index when currentImage changes
  useEffect(() => {
    if (currentImage && images.length > 0) {
      const index = images.findIndex(img => img.id === currentImage.id);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [currentImage, images]);

  // Navigation handlers - useCallback to prevent dependency issues
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrevious]);

  const image = images[currentIndex];

  if (!image) return null;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className="gallery-lightbox"
      closeOnBackdropClick={true}
      closeOnEsc={true}
    >
      <div className="gallery-lightbox__container">
        {/* Main image display */}
        <div className="gallery-lightbox__image-wrapper">
          <motion.img
            key={image.id}
            src={image.src}
            alt={image.title}
            className="gallery-lightbox__image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Navigation buttons - reference: Fitts's Law */}
          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={handlePrevious}
            aria-label="Previous image"
            title="Previous (← arrow)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={handleNext}
            aria-label="Next image"
            title="Next (→ arrow)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="gallery-lightbox__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Metadata panel */}
        <motion.div
          className="gallery-lightbox__metadata"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="gallery-lightbox__header">
            <h2 className="gallery-lightbox__title">{image.title}</h2>
            <span className="gallery-lightbox__category">{image.category}</span>
          </div>

          {image.description && (
            <p className="gallery-lightbox__description">
              {image.description}
            </p>
          )}

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="gallery-lightbox__thumbnails">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  className={cn(
                    'gallery-lightbox__thumbnail',
                    idx === currentIndex && 'gallery-lightbox__thumbnail--active'
                  )}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to image ${idx + 1}: ${img.title}`}
                >
                  <img src={img.src} alt={img.title} />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Close button */}
      <Dialog.Close onClick={onClose} />
    </Dialog>
  );
};

export default GalleryLightbox;
