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

  // Reset when src changes
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
    setRetryCount(0);
  }, [src]);

  const handleError = () => {
    // Try fallback first
    if (fallbackSrc && imageSrc !== fallbackSrc && retryCount === 0) {
      setImageSrc(fallbackSrc);
      setRetryCount(1);
      return;
    }
    
    // If still failing, show error state
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
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

