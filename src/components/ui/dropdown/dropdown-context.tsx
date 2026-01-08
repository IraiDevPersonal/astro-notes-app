import React, { use } from "react";

type DropdownContextProps = {
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onOpenChange: (open?: boolean) => void;
  open: boolean;
};

export const DropdownContext = React.createContext<
  DropdownContextProps | undefined
>(undefined);

export const useDropdownContext = () => {
  const context = use(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider"
    );
  }
  return context;
};
