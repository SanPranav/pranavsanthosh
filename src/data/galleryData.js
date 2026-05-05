/**
 * Gallery Image Data Structure
 * Reference: Extensible schema for easy addition/removal of images
 * 
 * Each image includes:
 * - id: unique identifier
 * - src: image path (stored in /public/images/gallery)
 * - title: display title
 * - category: for filtering (All included dynamically)
 * - description: optional metadata for lightbox
 * - aspect: optional aspect ratio for masonry (default 1)
 */

export const galleryImages = [
  {
    id: 'aerospace-1',
    src: '/pranavsanthosh/images/gallery/aerospace-1.svg',
    title: 'Advanced Propulsion System Design',
    category: 'Aerospace',
    description: 'CAD rendering of rocket engine with GD&T specifications',
    aspect: 1.5,
  },
  {
    id: 'aerospace-2',
    src: '/pranavsanthosh/images/gallery/aerospace-2.svg',
    title: 'Rocket Testing & Assembly',
    category: 'Aerospace',
    description: 'Team assembly of competition rocket for launch',
    aspect: 1,
  },
  {
    id: 'robotics-1',
    src: '/pranavsanthosh/images/gallery/robotics-1.svg',
    title: 'FRC Robot Design Competition',
    category: 'Robotics',
    description: 'Team Optix 3749 fully-assembled robot',
    aspect: 1.2,
  },
  {
    id: 'robotics-2',
    src: '/pranavsanthosh/images/gallery/robotics-2.svg',
    title: 'CAD Robot Assembly',
    category: 'Robotics',
    description: 'Complex mechanical system with drive base integration',
    aspect: 1,
  },
  {
    id: 'events-1',
    src: '/pranavsanthosh/images/gallery/events-1.svg',
    title: 'Outreach & Community Event',
    category: 'Events',
    description: 'Educational demonstration for K-12 students',
    aspect: 1.3,
  },
  {
    id: 'events-2',
    src: '/pranavsanthosh/images/gallery/events-2.svg',
    title: 'Team Collaboration & Planning',
    category: 'Events',
    description: 'Strategy session with team members',
    aspect: 1,
  },
  {
    id: 'portraits-1',
    src: '/pranavsanthosh/images/gallery/portraits-1.svg',
    title: 'Professional Portrait',
    category: 'Portraits',
    description: 'Team member spotlight photography',
    aspect: 1,
  },
  {
    id: 'portraits-2',
    src: '/pranavsanthosh/images/gallery/portraits-2.svg',
    title: 'Team Leadership',
    category: 'Portraits',
    description: 'Leadership team formal photography',
    aspect: 1,
  },
];

/**
 * Extract unique categories from images
 * Automatically maintains category list as images are added
 */
export const getGalleryCategories = () => {
  const categories = ['All'];
  const uniqueCategories = new Set(galleryImages.map(img => img.category));
  categories.push(...Array.from(uniqueCategories).sort());
  return categories;
};

/**
 * Filter images by category
 * Reference: Progressive disclosure pattern (Hick's Law)
 */
export const filterGalleryImages = (category) => {
  if (category === 'All') return galleryImages;
  return galleryImages.filter(img => img.category === category);
};
