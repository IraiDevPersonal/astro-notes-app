import { useEffect } from "react";

type KeyboardKey =
  | "Enter"
  | "Escape"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Tab"
  | "Backspace"
  | " "
  | (string & {});

export function useKeyDown(
  key: KeyboardKey,
  callback: () => void,
  preventExecution?: boolean
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
