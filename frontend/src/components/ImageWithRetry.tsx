import { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";

interface ImageWithRetryProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  retries?: number;
}

/**
 * Enhanced Image component with multiple retry strategies
 * Tries different approaches to load images that fail on mobile
 */
const ImageWithRetry = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc,
  retries = 3 
}: ImageWithRetryProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const [loadTimeout, setLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
    setAttempt(0);
    if (loadTimeout) {
      clearTimeout(loadTimeout);
    }
  }, [src]);

  // Timeout for slow-loading images (10 seconds)
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        handleError();
      }, 10000);
      setLoadTimeout(timeout);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, currentSrc]);

  const handleError = () => {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
      setLoadTimeout(null);
    }

    const nextAttempt = attempt + 1;

    // Strategy 1: Try explicit fallback
    if (fallbackSrc && attempt === 0 && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setAttempt(1);
      return;
    }

    // Strategy 2: Try without query parameters (for URLs with tokens/params)
    if (attempt < retries && currentSrc.includes('?')) {
      const cleanUrl = currentSrc.split('?')[0];
      if (cleanUrl !== currentSrc) {
        setCurrentSrc(cleanUrl);
        setAttempt(nextAttempt);
        return;
      }
    }

    // Strategy 3: Try with different protocol (http vs https)
    if (attempt < retries && currentSrc.startsWith('https://')) {
      const httpUrl = currentSrc.replace('https://', 'http://');
      setCurrentSrc(httpUrl);
      setAttempt(nextAttempt);
      return;
    }

    // Strategy 4: Try Cloudflare Images proxy (if available)
    // This would require setting up a Cloudflare Worker
    // For now, we'll skip this

    // Strategy 5: Use placeholder
    if (attempt < retries) {
      const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`;
      setCurrentSrc(placeholder);
      setAttempt(nextAttempt);
      return;
    }

    // All strategies failed
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
      setLoadTimeout(null);
    }
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <div className="text-center p-4">
          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse z-10">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ImageWithRetry;

