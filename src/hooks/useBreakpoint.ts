import { useEffect } from "react";

/**
 * A hook that listens for screen resize and runs a callback
 * when it hits desktop size (by default `768px`)
 * @param callback 
 * @param breakpoint
 */
export function useBreakpointReset(callback: () => void, breakpoint = 768) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        callback();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [callback, breakpoint]);
}
