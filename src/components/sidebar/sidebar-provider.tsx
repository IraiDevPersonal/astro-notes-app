import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import React, { use, useState } from "react";

type SidebarContextProps = {
  setOpen: (open?: boolean) => void;
  open: boolean;
};

const SidebarContext = React.createContext<SidebarContextProps | undefined>(
  undefined
);

type SidebarProviderProps = {
  children: React.ReactNode;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  useMediaQuery("(width >= 48rem)", () => setOpen(false));
  useLockBodyScroll(open);

  const handleToggleOpenState = (open?: boolean) => {
    setOpen((prevValue) => open ?? !prevValue);
  };

  return (
    <SidebarContext
      value={{
        setOpen: handleToggleOpenState,
        open,
      }}
    >
      {children}
    </SidebarContext>
  );
}

export const useSidebar = () => {
  const context = use(SidebarContext);

  if (!context) {
    throw new Error("Solo puede usarse useSidebar dentro de su provider");
  }

  return context;
};
