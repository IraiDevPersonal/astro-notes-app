import { useEffect } from "react";
import type { KeyboardKey } from "../lib/types";

export function useKeyDown(
  key: KeyboardKey,
  callback: () => void,
  preventExecution?: boolean,
) {
  useEffect(() => {
    if (preventExecution) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, key]);
}
