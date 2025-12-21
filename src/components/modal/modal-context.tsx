import { createContext, use } from "react";

type ModalContextProsp = {
  onOpenChange: (open?: boolean) => void;
  open: boolean;
};

export const ModalContext = createContext<ModalContextProsp | undefined>(
  undefined
);

export function useModalContext() {
  const context = use(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalContext");
  }
  return context;
}
