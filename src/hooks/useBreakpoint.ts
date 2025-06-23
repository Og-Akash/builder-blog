import { useEffect } from "react";

/**
 * A hook that listens for screen resize and runs a callback
 * when it hits desktop size (by default `768px`)
 * @param callback
 * @param breakpoint
 */
export function useBreakpointReset(callback: () => void, breakpoint = 768) {
  useEffect(() => {
    function handlResize() {
      if (window.innerWidth >= breakpoint) {
        callback();
      }
    }
    window.addEventListener("resize", handlResize);
    return () => window.removeEventListener("resize", handlResize);
  }, [callback, breakpoint]);
}
