# Gallery Image Upload Guide

## How to Add Images to Your Gallery

### Step 1: Add Image Files
Place your image files in the `/public/images/gallery/` directory.

**Supported formats:**
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended - smallest file size)
- `.gif`
- `.avif` (best compression)

### Step 2: The Manifest is Auto-Generated
The `public/images/gallery/manifest.json` file is **automatically generated** when you build the project. Simply add your images to the folder, and the build process will create the manifest.

### Step 3: Add Image Metadata
To display images with custom names and locations in the gallery, edit the `IMAGE_METADATA` object at the top of `src/pages/Gallery/Gallery.jsx`:

```javascript
const IMAGE_METADATA = {
  'aconv.png': {
    name: 'Anaheim Convention Center',
    location: 'Anaheim Convention Center Hall D @ Socal District Championships 2026 FIRST',
    width: 1026,
    height: 1368
  },
  'filename.jpg': {
    name: 'Image Title',
    location: 'Location Name',
    width: 1600,
    height: 1200
  },
  // Add more images here
};
```

**Fields:**
- `name`: Image title (shown on hover and in modal)
- `location`: Location/description (shown on hover and in modal)
- `width`: Approximate image width (for masonry grid layout)
- `height`: Approximate image height (for masonry grid layout)

### Example Workflow

1. **Export/save your image** → `my-photo.jpg`
2. **Add to folder** → Copy to `/public/images/gallery/`
3. **Add metadata** → Edit `IMAGE_METADATA` in `src/pages/Gallery/Gallery.jsx`:
   ```javascript
   const IMAGE_METADATA = {
     'my-photo.jpg': {
       name: 'Project Launch Event',
       location: 'Competition Venue - Hall A',
       width: 1920,
       height: 1440
     }
   };
   ```
4. **Build** → Run `npm run build`
5. **Done!** Your image appears in the gallery with metadata on hover and in modal

### Tips for Best Results

- **Image sizes**: Keep images under 2MB each for fast loading
- **Aspect ratios**: Mix different ratios (square, portrait, landscape) for dynamic masonry layout
- **WebP format**: Convert JPGs to WebP to reduce file size by 25-35%
- **Accurate dimensions**: Provide correct width/height for proper grid layout

### Gallery Features
- **Hover**: See image name and location
- **Click**: Opens full-screen modal with enlarged image
- **Navigation**: Use arrow buttons or keyboard (← → to navigate, ESC to close)
- **Counter**: Shows current image position
- **Responsive**: Works on all devices
