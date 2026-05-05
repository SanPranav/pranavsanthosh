import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

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
          setImages(manifest.length > 0 ? manifest : DEFAULT_IMAGES);
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

  const galleryItems = useMemo(() => images.map((image, index) => ({
    id: image.name ? `${image.name}-${index}` : `default-${index}`,
    src: image.src || `${process.env.PUBLIC_URL}/images/gallery/${image.name}`,
    width: image.width,
    height: image.height,
    name: image.name || 'Untitled',
    location: image.location || 'Unknown',
  })), [images]);

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
            Visual Sandbox
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
    </div>
  );
};

export default Gallery;
