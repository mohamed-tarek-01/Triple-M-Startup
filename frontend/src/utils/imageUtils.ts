/**
 * Image URL utilities for handling different image sources
 * and generating fallback URLs
 */

/**
 * Generate fallback URLs for different image sources
 */
export const getImageFallbacks = (originalUrl: string): string[] => {
  const fallbacks: string[] = [];

  // If it's a GitHub private image, try to extract the raw URL
  if (originalUrl.includes('private-user-images.githubusercontent.com')) {
    // Try to get the raw content URL (might not work but worth trying)
    const match = originalUrl.match(/\/\d+\/([^?]+)/);
    if (match) {
      // This won't work for private images, but we try
      fallbacks.push(`https://raw.githubusercontent.com/user/repo/main/${match[1]}`);
    }
  }

  // If it's an ImgBB URL, try alternative formats
  if (originalUrl.includes('i.ibb.co')) {
    // Try direct image URL without parameters
    const directUrl = originalUrl.split('?')[0];
    if (directUrl !== originalUrl) {
      fallbacks.push(directUrl);
    }
  }

  // If it's a DigitalOcean Spaces URL, try without query params
  if (originalUrl.includes('digitaloceanspaces.com')) {
    const cleanUrl = originalUrl.split('?')[0];
    if (cleanUrl !== originalUrl) {
      fallbacks.push(cleanUrl);
    }
  }

  return fallbacks;
};

/**
 * Check if URL is from a potentially problematic source
 */
export const isProblematicImageSource = (url: string): boolean => {
  const problematicPatterns = [
    'private-user-images.githubusercontent.com',
    'i.ibb.co',
    'digitaloceanspaces.com'
  ];

  return problematicPatterns.some(pattern => url.includes(pattern));
};

/**
 * Generate a placeholder image URL
 */
export const getPlaceholderImage = (width: number = 400, height: number = 300): string => {
  return `https://via.placeholder.com/${width}x${height}/cccccc/666666?text=Image+Not+Available`;
};

/**
 * Try to convert GitHub private URL to public alternative
 * Note: This won't work for truly private images, but provides a fallback structure
 */
export const convertGitHubPrivateUrl = (url: string): string | null => {
  if (!url.includes('private-user-images.githubusercontent.com')) {
    return null;
  }

  // Extract image path from URL
  const pathMatch = url.match(/\/\d+\/([^?]+)/);
  if (pathMatch) {
    // This is a placeholder - you'd need to upload to a public location
    return null;
  }

  return null;
};

