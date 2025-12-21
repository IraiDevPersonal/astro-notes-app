import { useEffect } from "react";

export function useLockBodyScroll(listener: boolean) {
  useEffect(() => {
    if (listener) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [listener]);
}
