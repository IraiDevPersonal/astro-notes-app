import { useEffect, useState, useCallback, useRef } from "react";

export const useMediaQuery = (
  query: string,
  callback?: (value: boolean) => void,
  withState: boolean = false
) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  // Usar ref para evitar recrear el listener
  const callbackRef = useRef(callback);
  const queryRef = useRef(query);

  // Mantener el callback actualizado sin causar re-renders
  useEffect(() => {
    callbackRef.current = callback;
    queryRef.current = query;
  }, [callback, query]);

  useEffect(() => {
    const media = window.matchMedia(queryRef.current);

    callbackRef.current?.(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      const match = e.matches;

      if (withState) {
        setMatches(match);
      }

      callbackRef.current?.(match);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [withState]);

  return matches;
};
