import { Link, LinkProps } from "react-router-dom";
import { useCallback, useRef } from "react";

// Route to chunk mapping for prefetching
const routeChunks: Record<string, () => Promise<unknown>> = {
  "/": () => import("@/pages/Home"),
  "/macon": () => import("@/pages/Index"),
  "/macon/contact": () => import("@/pages/Contact"),
  "/macon/pricing-chart": () => import("@/pages/PricingChart"),
  "/macon/about": () => import("@/pages/About"),
  "/macon/business": () => import("@/pages/Business"),
  "/macon/education": () => import("@/pages/Education"),
  "/macon/iphone": () => import("@/pages/iPhone"),
  "/macon/ipad": () => import("@/pages/iPad"),
  "/macon/macbook": () => import("@/pages/MacBook"),
  "/macon/diy-repair": () => import("@/pages/DIYRepair"),
  "/macon/vineville": () => import("@/pages/neighborhoods/Vineville"),
  "/macon/ingleside": () => import("@/pages/neighborhoods/Ingleside"),
  "/macon/north-macon": () => import("@/pages/neighborhoods/NorthMacon"),
  "/macon/downtown": () => import("@/pages/neighborhoods/Downtown"),
  "/macon/east-macon": () => import("@/pages/neighborhoods/EastMacon"),
  "/macon/south-macon": () => import("@/pages/neighborhoods/SouthMacon"),
  "/macon/rutland": () => import("@/pages/neighborhoods/Rutland"),
  "/blog": () => import("@/pages/blog/Index"),
};

// Track already prefetched routes
const prefetchedRoutes = new Set<string>();

interface PrefetchLinkProps extends LinkProps {
  prefetchDelay?: number;
}

const PrefetchLink = ({ 
  to, 
  prefetchDelay = 100, 
  onMouseEnter, 
  onFocus,
  ...props 
}: PrefetchLinkProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toPath = typeof to === "string" ? to : to.pathname || "";

  const prefetch = useCallback(() => {
    if (prefetchedRoutes.has(toPath)) return;
    
    const chunkLoader = routeChunks[toPath];
    if (chunkLoader) {
      prefetchedRoutes.add(toPath);
      // Use requestIdleCallback for non-blocking prefetch
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => chunkLoader());
      } else {
        setTimeout(() => chunkLoader(), 0);
      }
    }
  }, [toPath]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Start prefetch after a small delay to avoid prefetching on quick mouse movements
      timeoutRef.current = setTimeout(prefetch, prefetchDelay);
      onMouseEnter?.(e);
    },
    [prefetch, prefetchDelay, onMouseEnter]
  );

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLAnchorElement>) => {
      prefetch();
      onFocus?.(e);
    },
    [prefetch, onFocus]
  );

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      {...props}
    />
  );
};

export default PrefetchLink;
