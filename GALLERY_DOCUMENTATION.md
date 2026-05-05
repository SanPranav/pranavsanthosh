# Gallery System Documentation

## Quick Start

The gallery system is fully integrated into the Work page and displays a professional photography portfolio with filtering and lightbox capabilities.

### Current Features

✅ **Responsive Masonry Grid**
- Auto-fit layout that adapts to screen size
- Desktop: 280px minimum column width
- Tablet: 240px minimum column width  
- Mobile: Single column

✅ **Category Filtering**
- Categories: All, Aerospace, Robotics, Events, Portraits
- Smooth animations between filters
- Automatic category detection from data

✅ **Full-Screen Lightbox**
- Click any image to open full-screen viewer
- Left/right navigation buttons
- Thumbnail strip for quick navigation
- Keyboard support (← prev, → next, ESC close)
- Image counter and metadata display

✅ **Lazy Loading**
- Images load only when visible
- Skeleton loaders during loading
- No layout shift (CLS: 0)

---

## Adding New Images

### Step 1: Add Image to Data

Edit `src/data/galleryData.js`:

```js
export const galleryImages = [
  // ... existing images ...
  {
    id: 'aerospace-3',
    src: '/pranavsanthosh/images/gallery/aerospace-3.jpg',
    title: 'Your Image Title',
    category: 'Aerospace', // Use existing category or create new
    description: 'Optional description for lightbox',
    aspect: 1.5, // Optional: width/height ratio for masonry
  },
];
```

### Step 2: Add Image File

Place image in: `public/images/gallery/`

**Supported formats:** JPG, PNG, SVG, WebP

**Recommended dimensions:**
- Width: 800-1200px
- Format: Optimized/compressed
- Aspect ratio: 1.0-1.5 (portrait to square preferred)

### Step 3: Verify Category

Categories are auto-generated from the `category` field. No separate registration needed.

**Existing categories:**
- Aerospace
- Robotics
- Events
- Portraits

**To add new category:** Simply use a new category name in the data—it will automatically appear in filters.

---

## Component Structure

### Gallery (Main Container)
Props:
- `title?: string` - Section title (default: "Photography Gallery")
- `subtitle?: string` - Section subtitle
- `className?: string` - Additional CSS classes

```jsx
import { Gallery } from '../../components';

<Gallery
  title="Photography & Visual Work"
  subtitle="Behind-the-scenes moments..."
/>
```

### GalleryGrid
Props:
- `images: GalleryImage[]` - Array of images to display
- `onImageClick: (image) => void` - Callback when image clicked
- `className?: string` - Additional CSS classes

### GalleryFilter
Props:
- `activeCategory?: string` - Currently selected category
- `onCategoryChange: (category) => void` - Callback on filter change
- `className?: string` - Additional CSS classes

### GalleryImage
Props:
- `image: GalleryImage` - Image object
- `onClick: (image) => void` - Click handler
- `loading?: "lazy" | "eager"` - Loading strategy (default: "lazy")

### GalleryLightbox
Props:
- `isOpen: boolean` - Whether lightbox is visible
- `currentImage?: GalleryImage` - Currently displayed image
- `images: GalleryImage[]` - All images in set
- `onClose: () => void` - Close handler

---

## Data Structure

```typescript
type GalleryImage = {
  id: string;              // Unique identifier
  src: string;             // Image path (public/)
  title: string;           // Display title (shows in overlay & lightbox)
  category: string;        // Category for filtering
  description?: string;    // Optional description (shows in lightbox)
  aspect?: number;         // Optional aspect ratio (w/h) for masonry
}
```

**Example:**
```js
{
  id: 'robotics-3',
  src: '/pranavsanthosh/images/gallery/robotics-3.jpg',
  title: 'Advanced Sensor Integration',
  category: 'Robotics',
  description: 'Close-up of sensor array with custom PCB mounting',
  aspect: 1.2,
}
```

---

## Responsive Behavior

### Desktop (1024px+)
- 3-4 columns in view
- Hover overlay appears on image hover
- Lightbox opens in full-screen with metadata panel on right

### Tablet (768px-1024px)
- 2-3 columns in view
- Metadata panel appears below image in lightbox
- Touch-friendly navigation

### Mobile (480px+)
- Single column or 2 columns depending on width
- Lightbox stacked vertically
- Thumbnail strip scrolls horizontally

### Small Mobile (<480px)
- Single column layout
- Full viewport lightbox
- Compact metadata

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `→` Arrow Right | Next image in lightbox |
| `← Arrow Left` | Previous image in lightbox |
| `Tab` | Focus navigation through filters |
| `Enter`/`Space` | Activate filter tabs |
| `Esc` | Close lightbox |

---

## Styling & Customization

### CSS Variables

The gallery respects all design system CSS variables:

```css
/* Colors */
--color-accent-primary: #AFCBFF;
--color-text-primary: #ffffff;
--color-text-secondary: #a0a0a0;
--color-glass-bg: rgba(175, 203, 255, 0.05);

/* Spacing */
--spacing-4: 1rem;
--spacing-6: 1.5rem;
--spacing-8: 2rem;

/* Typography */
--font-size-lg: 1.125rem;
--font-family: 'Inter', sans-serif;

/* Border & Radius */
--radius-lg: 0.75rem;
--radius-2xl: 1.5rem;

/* Motion */
--transition-base: 200ms ease-in-out;
```

### Custom Styling

Wrap Gallery in a container with custom styles:

```jsx
<div className="custom-gallery-wrapper">
  <Gallery
    title="My Gallery"
    className="gallery--large"
  />
</div>
```

```css
.gallery--large .gallery__title {
  font-size: var(--font-size-7xl);
}

.custom-gallery-wrapper {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: var(--spacing-16);
}
```

---

## Performance Tips

### Optimization Best Practices

1. **Image Optimization**
   - Use WebP format with JPEG fallback
   - Compress images to <100KB each
   - Use appropriate dimensions (800-1200px width)

2. **Lazy Loading**
   - Enabled by default with `loading="lazy"`
   - Improves perceived performance
   - Reduces initial bundle size

3. **Aspect Ratios**
   - Specify aspect ratio for each image
   - Prevents layout shifts
   - Improves masonry appearance

4. **Category Organization**
   - Keep 4-6 categories maximum (Hick's Law)
   - Use clear, concise category names
   - Avoid category names >15 chars

### Monitoring Performance

Check build stats:
```bash
npm run build
# Look for "File sizes after gzip"
```

Expected bundle size: ~220KB (gzipped)

---

## Accessibility

### Built-In Features

✅ **Semantic HTML**
- Proper heading hierarchy (H1 > H3)
- `role="dialog"` on lightbox
- `aria-modal="true"` for accessibility

✅ **Keyboard Navigation**
- Full keyboard support (no mouse required)
- Focus indicators on all interactive elements
- Escape to close modals

✅ **Screen Reader Support**
- Alt text on all images
- Descriptive button labels
- ARIA attributes on interactive elements

✅ **Color Contrast**
- Text: 4.5:1 ratio (WCAG AA)
- Interactive elements: 3:1 minimum
- All colors tested for accessibility

### Testing

1. **Keyboard Navigation**
   ```bash
   # Test without mouse
   Tab: Navigate through filters
   Enter: Select filter
   Click image → Arrow keys: Navigate in lightbox
   ```

2. **Screen Reader**
   ```bash
   # macOS: VO + U (rotor)
   # Windows: NVDA or JAWS
   # Chrome: DevTools > Accessibility panel
   ```

3. **Color Contrast**
   ```bash
   # Chrome DevTools > Accessibility panel
   # or axe DevTools browser extension
   ```

---

## Troubleshooting

### Images Not Appearing

1. **Check file path** - Ensure path matches exactly (case-sensitive on Linux)
2. **Verify file exists** - `ls public/images/gallery/`
3. **Check image format** - Supported: JPG, PNG, SVG, WebP
4. **Try relative path** - If absolute path fails, use relative

**Example:**
```js
// ✅ Works
src: '/pranavsanthosh/images/gallery/image.jpg'

// Also works
src: 'images/gallery/image.jpg'
```

### Filter Not Working

1. **Check category name** - Must match exactly (case-sensitive)
2. **Verify data structure** - Each image must have `category` field
3. **Clear cache** - `npm run build && npm start`

### Lightbox Issues

1. **Images not clickable** - Ensure `onImageClick` handler is passed
2. **Navigation not working** - Check keyboard event listeners
3. **Focus trap not working** - Reload page, check browser console

---

## Future Enhancements

### Planned Features (Phase 2)

- [ ] Image upload admin interface
- [ ] Search functionality
- [ ] Social sharing buttons
- [ ] Image metadata (EXIF) display
- [ ] Print/download options
- [ ] Slideshow mode (auto-advance)
- [ ] Infinite scroll pagination
- [ ] Advanced filtering (date range, rating)

### Optional Integrations

- **Image CDN**: Cloudinary, imgix for optimization
- **Video Support**: Vimeo/YouTube embeds
- **Analytics**: Google Analytics gallery interactions
- **E-commerce**: Print-on-demand integration

---

## API Reference

### Gallery Component

```jsx
<Gallery
  title="string"           // Section title
  subtitle="string"        // Section subtitle
  className="string"       // Additional classes
/>
```

### galleryData.js Functions

```js
import { 
  galleryImages,           // Full image array
  getGalleryCategories,    // Returns: ['All', 'Aerospace', ...]
  filterGalleryImages      // (category) => filtered images
} from '../../data/galleryData';

// Example usage
const categories = getGalleryCategories();
const filtered = filterGalleryImages('Robotics');
```

---

## Support

For issues or questions:

1. Check the audit report: `AUDIT_REPORT.md`
2. Review component code with JSDoc comments
3. Check browser console for errors
4. Verify data structure matches `GalleryImage` type

---

**Gallery System v1.0**  
Last Updated: May 4, 2026  
Status: Production Ready ✅
