# Image Optimization

This project includes automatic image optimization for production builds.

## Configuration

The Vite configuration (`vite.config.js`) includes the `vite-plugin-imagemin` plugin that automatically optimizes images during the build process.

### Optimization Settings

- **JPEG**: Compressed with mozjpeg at 80% quality
- **PNG**: Optimized with optipng at level 7
- **WebP**: Converted and compressed at 80% quality

## Best Practices

### Image Formats

1. **Profile Photos**: Use JPEG or WebP format for photographs
2. **Icons/Logos**: Use SVG for vector graphics when possible
3. **Fallback**: The Profile component includes SVG fallback for missing images

### Image Sizes

- Profile photo should be optimized before adding to the project
- Recommended size: 400x400px or smaller
- The current profile photo is already optimized at 1.5KB

### Adding New Images

1. Place images in the `public/` directory
2. Reference them with absolute paths (e.g., `/image-name.jpg`)
3. Always include descriptive `alt` text for accessibility
4. Images will be automatically optimized during production build

## Build Process

When running `npm run build`, the vite-plugin-imagemin will:
1. Compress JPEG and PNG images
2. Generate WebP versions for better performance
3. Maintain original images as fallbacks

## Performance Impact

- Reduced image file sizes improve page load times
- WebP format provides better compression than JPEG/PNG
- Lazy loading is handled by browser native features
