import { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const Image = ({ src, alt, className = "", fallbackSrc }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [loadTimeout, setLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  // Reset when src changes
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
    setRetryCount(0);
    if (loadTimeout) {
      clearTimeout(loadTimeout);
    }
  }, [src]);

  // Timeout for slow-loading images (15 seconds on mobile)
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        // Trigger error handling after timeout
        if (loadTimeout) {
          clearTimeout(loadTimeout);
        }
        const currentRetry = retryCount;
        if (currentRetry < 4) {
          handleError();
        } else {
          setHasError(true);
          setIsLoading(false);
        }
      }, 15000);
      setLoadTimeout(timeout);
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, imageSrc, retryCount]);

  const handleError = () => {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
      setLoadTimeout(null);
    }

    const currentRetry = retryCount;
    const nextRetry = currentRetry + 1;

    // Strategy 1: Try explicit fallback
    if (fallbackSrc && currentRetry === 0 && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setRetryCount(1);
      setIsLoading(true);
      return;
    }

    // Strategy 2: Remove query parameters (for URLs with JWT tokens, etc.)
    if (nextRetry === 1 && imageSrc.includes('?')) {
      const cleanUrl = imageSrc.split('?')[0];
      if (cleanUrl !== imageSrc) {
        setImageSrc(cleanUrl);
        setRetryCount(2);
        setIsLoading(true);
        return;
      }
    }

    // Strategy 3: Try HTTP instead of HTTPS (sometimes helps with CORS)
    if (nextRetry === 2 && imageSrc.startsWith('https://')) {
      const httpUrl = imageSrc.replace('https://', 'http://');
      setImageSrc(httpUrl);
      setRetryCount(3);
      setIsLoading(true);
      return;
    }

    // Strategy 4: Use SVG placeholder
    if (nextRetry === 3) {
      const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='14' dy='10.5' x='50%25' y='50%25' text-anchor='middle'%3E${encodeURIComponent(alt || 'Image')}%3C/text%3E%3C/svg%3E`;
      setImageSrc(placeholder);
      setRetryCount(4);
      setIsLoading(true);
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

  // Default fallback - a simple placeholder
  const defaultFallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage not available%3C/text%3E%3C/svg%3E";

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <ImageIcon className="h-12 w-12 text-muted-foreground" />
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
        src={imageSrc}
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

export default Image;

