import { useEffect } from "react";

export const useMediaQuery = (query: string, callback: () => void) => {
  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (e: MediaQueryListEvent) => {
      const match = e.matches;
      if (match) {
        callback();
      }
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query, callback]);
};
