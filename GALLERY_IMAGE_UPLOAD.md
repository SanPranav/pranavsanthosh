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

### Step 3: Add Metadata (Image Name & Location)
To make images display with custom names and locations in the gallery, you need to edit the `DEFAULT_IMAGES` array in `src/pages/Gallery/Gallery.jsx`:

```javascript
const DEFAULT_IMAGES = [
  { 
    src: '/pranavsanthosh/images/gallery/your-image.jpg',  // Path to your image
    width: 1600,          // Approximate width (used for masonry sizing)
    height: 1000,         // Approximate height
    name: 'Image Title',   // Shows on hover and in modal
    location: 'Location'   // Shows on hover and in modal
  },
  // Add more images here
];
```

### Example Workflow

1. **Take/Export your image** → `my-project-photo.jpg`
2. **Add to folder** → Copy to `/public/images/gallery/`
3. **Update DEFAULT_IMAGES** in `src/pages/Gallery/Gallery.jsx`:
   ```javascript
   {
     src: '/pranavsanthosh/images/gallery/my-project-photo.jpg',
     width: 1600,
     height: 1000,
     name: 'Project Launch',
     location: 'Competition Venue'
   }
   ```
4. **Build** → Run `npm run build`
5. **Done!** Your image appears in the gallery with hover info and full modal view

### Tips for Best Results

- **Image sizes**: Keep images under 2MB each for fast loading
- **Aspect ratios**: Mix different ratios (square, portrait, landscape) for dynamic masonry layout
- **WebP format**: Convert JPGs to WebP to reduce file size by 25-35%
- **Dimensions**: Provide accurate width/height in the code for proper grid sizing

### Gallery Features
- **Hover**: See image name and location
- **Click**: Opens full-screen modal with enlarged image
- **Navigation**: Use arrow buttons or keyboard (← → to navigate, ESC to close)
- **Counter**: Shows current image position
