import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from './GalleryGrid';
import GalleryFilter from './GalleryFilter';
import GalleryLightbox from './GalleryLightbox';
import { filterGalleryImages } from '../../data/galleryData';
import { cn } from '../../utils/cn';
import './Gallery.css';

/**
 * Gallery component - Main container for photography portfolio.
 * Reference: Modern portfolio standards + component composition
 * Manages state for filtering and lightbox functionality.
 * 
 * Features:
 * - Responsive masonry grid with lazy loading
 * - Category filtering with tabs (Hick's Law - reduce decisions)
 * - Full-screen lightbox viewer with keyboard navigation
 * - Smooth animations and transitions
 */
const Gallery = ({ 
  title = 'Photography Gallery',
  subtitle = 'A collection of work, events, and moments',
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Memoize filtered images to optimize performance
  const filteredImages = useMemo(() => {
    return filterGalleryImages(activeCategory);
  }, [activeCategory]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section className={cn('gallery', className)}>
      {/* Hero Section */}
      <motion.div
        className="gallery__hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="gallery__title">{title}</h1>
        <p className="gallery__subtitle">{subtitle}</p>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
      >
        <GalleryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </motion.div>

      {/* Gallery Grid */}
      <GalleryGrid
        images={filteredImages}
        onImageClick={handleImageClick}
      />

      {/* Lightbox */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        currentImage={selectedImage}
        images={filteredImages}
        onClose={handleCloseLightbox}
      />
    </section>
  );
};

export default Gallery;
