export type PortalPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type PortalPosition = {
  top: number;
  left: number;
  width: number;
};

export type KeyboardKey =
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

export type Shortcut = {
  key: KeyboardKey;
  modifier: "meta" | "ctrl" | "shift" | "alt" | "none" | "ctrl+shift";
};
