import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Image metadata mapping - add your images here with name and location
const IMAGE_METADATA = {
  'aconv.png': {
    name: 'Anaheim Convention Center',
    location: 'Anaheim Convention Center Hall D @ Socal District Championships 2026 FIRST',
    width: 1026,
    height: 1368
  },
  'osunset.png': {
    name: 'Oceanside Sunset',
    location: 'Beachfront @ Sunset, San Diego 2024',
    width: 1026,
    height: 1368
  },
  // Add more images here:
  // 'filename.jpg': {
  //   name: 'Image Title',
  //   location: 'Location Name',
  //   width: 1600,
  //   height: 1200
  // }
};

const DEFAULT_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1541359927273-d76820fc43f9?q=80&w=1600&auto=format&fit=crop', width: 1600, height: 1000, name: 'Rocket Engine Design', location: 'Competition Lab' },
  { src: 'https://images.unsplash.com/photo-1601639015090-ffb7937aa15f?q=80&w=900&auto=format&fit=crop', width: 900, height: 1400, name: 'Launch Day Moment', location: 'Test Range' },
  { src: 'https://images.unsplash.com/photo-1520114092791-72f87adad218?q=80&w=1400&auto=format&fit=crop', width: 1400, height: 1400, name: 'Team Assembly', location: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1517457210156-3bcca8bc02a5?q=80&w=1800&auto=format&fit=crop', width: 1800, height: 1200, name: 'CAD Development', location: 'Design Studio' },
  { src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 1600, name: 'Testing Phase', location: 'Tech Lab' },
  { src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1500&auto=format&fit=crop', width: 1500, height: 900, name: 'Project Overview', location: 'Headquarters' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadManifest = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/images/gallery/manifest.json`);
        if (!response.ok) {
          throw new Error('Manifest not found');
        }

        const manifest = await response.json();
        if (!cancelled) {
          if (manifest.length > 0) {
            // Merge manifest files with metadata
            const enrichedImages = manifest.map((item) => {
              const metadata = IMAGE_METADATA[item.name] || {};
              return {
                fileName: item.name,
                width: metadata.width,
                height: metadata.height,
                name: metadata.name,
                location: metadata.location,
                src: `${process.env.PUBLIC_URL}/images/gallery/${item.name}`,
              };
            });
            setImages(enrichedImages);
          } else {
            setImages(DEFAULT_IMAGES);
          }
        }
      } catch (error) {
        if (!cancelled) {
          setImages(DEFAULT_IMAGES);
        }
      }
    };

    loadManifest();

    return () => {
      cancelled = true;
    };
  }, []);

  const galleryItems = useMemo(() => images.map((image, index) => {
    const src = image.src || `${process.env.PUBLIC_URL}/images/gallery/${image.fileName || image.name}`;
    const displayName = image.name || image.fileName || 'Untitled';
    
    return {
      id: image.fileName ? `${image.fileName}-${index}` : `default-${index}`,
      src,
      width: image.width || 1600,
      height: image.height || 1200,
      name: displayName,
      location: image.location || 'Unknown',
      index: index,
    };
  }), [images]);

  const navigateNextImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev && prev.index < galleryItems.length - 1) {
        return galleryItems[prev.index + 1];
      }
      return prev;
    });
  }, [galleryItems]);

  const navigatePrevImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev && prev.index > 0) {
        return galleryItems[prev.index - 1];
      }
      return prev;
    });
  }, [galleryItems]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Lock body scroll on modal open to ensure backdrop centers correctly on mobile
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // small scroll reset to help some mobile browsers center fixed elements
      try { window.scrollTo(0, 0); } catch (e) {}
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleImageKeyDown = (event, image) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick(image);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Update keyboard handler to use the memoized navigation functions
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
      if (e.key === 'ArrowLeft' && isModalOpen && selectedImage) {
        navigatePrevImage();
      }
      if (e.key === 'ArrowRight' && isModalOpen && selectedImage) {
        navigateNextImage();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, selectedImage, navigateNextImage, navigatePrevImage]);

  return (
    <div className="gallery page-wrapper">
      <section className="gallery__hero section">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gallery__title"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gallery__subtitle"
          >
            A curated intersection of light, shadow, and geometry.
          </motion.p>
        </div>
      </section>

      <section className="gallery__display section-sm">
        <div className="container">
          <motion.div 
            className="gallery__bento"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryItems.map((img) => {
              const aspectRatio = img.width / img.height;
              const columnSpan = aspectRatio > 1.35 ? 2 : 1;
              const rowSpan = aspectRatio > 1.35 ? 18 : aspectRatio < 0.85 ? 28 : 22;

              return (
                <motion.div
                  key={img.id}
                  className="gallery__bento-item"
                  variants={itemVariants}
                  style={{ gridColumnEnd: `span ${columnSpan}`, gridRowEnd: `span ${rowSpan}` }}
                  whileHover={{ scale: 0.99, opacity: 0.95 }}
                  transition={{ duration: 0.2 }}
                    onClick={() => handleImageClick(img)}
                    onPointerUp={(e) => { e.preventDefault(); handleImageClick(img); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => handleImageKeyDown(event, img)}
                >
                  <img src={img.src} alt={`Artwork ${img.id}`} loading="lazy" />
                  <div className="gallery__image-overlay">
                    <div className="gallery__image-info">
                      <h3 className="gallery__image-name">{img.name}</h3>
                      <p className="gallery__image-location">{img.location}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <motion.div
          className="gallery__modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery__modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="gallery__modal-image-wrapper">
              <div className="gallery__modal-main">
                <div className="gallery__modal-image-panel">
                  <motion.img
                    src={selectedImage.src}
                    alt={selectedImage.name}
                    className="gallery__modal-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="gallery__modal-info">
                  <h2 className="gallery__modal-title">{selectedImage.name}</h2>
                  <p className="gallery__modal-location">{selectedImage.location}</p>
                </div>
              </div>
            </div>

            <div className="gallery__modal-counter" aria-live="polite">
              {selectedImage.index + 1} / {galleryItems.length}
            </div>

            {/* Navigation Arrows */}
            {selectedImage.index > 0 && (
              <button
                className="gallery__modal-nav gallery__modal-nav--prev"
                onClick={navigatePrevImage}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            {selectedImage.index < galleryItems.length - 1 && (
              <button
                className="gallery__modal-nav gallery__modal-nav--next"
                onClick={navigateNextImage}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}

          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
