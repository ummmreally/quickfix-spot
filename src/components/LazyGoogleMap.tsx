import { useState, useEffect, useRef } from "react";

interface LazyGoogleMapProps {
  src: string;
  title: string;
  className?: string;
  staticMapUrl?: string;
}

const LazyGoogleMap = ({ src, title, className = "", staticMapUrl }: LazyGoogleMapProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default static map showing the location
  const defaultStaticMap = "https://maps.googleapis.com/maps/api/staticmap?center=32.78909817359875,-83.68656332397183&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C32.78909817359875,-83.68656332397183&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Static map placeholder - always visible until interactive map loads */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <img
            src={staticMapUrl || defaultStaticMap}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {isVisible && (
            <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-muted-foreground shadow-sm">
              Loading interactive map...
            </div>
          )}
        </div>
      )}
      
      {/* Interactive map - only load when visible */}
      {isVisible && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "opacity-100" : "opacity-0"}
        />
      )}
    </div>
  );
};

export default LazyGoogleMap;
