import { useEffect } from "react";
import type { Shortcut } from "../lib/types";

export function useKeyboardShortcut(shortcut: Shortcut, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== shortcut.key) return;

      let isModifierPressed = false;
      switch (shortcut.modifier) {
        case "none":
          isModifierPressed = true;
          break;
        case "meta":
          isModifierPressed = event.metaKey;
          break;
        case "ctrl":
          isModifierPressed = event.ctrlKey;
          break;
        case "shift":
          isModifierPressed = event.shiftKey;
          break;
        case "alt":
          isModifierPressed = event.altKey;
          break;
        case "ctrl+shift":
          isModifierPressed = event.ctrlKey && event.shiftKey;
          break;
      }

      if (isModifierPressed) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcut, callback]);
}
