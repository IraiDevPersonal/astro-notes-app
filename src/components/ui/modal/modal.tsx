import { useLockScroll } from "@/hooks/use-lock-scroll";
import { useState } from "react";
import { ModalContext } from "./modal-context";

type ModalProps = {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
};

export function Modal({
  defaultOpen = false,
  onOpenChange,
  children,
  open,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  useLockScroll(open ?? isOpen);

  const handleOpenChange = (value?: boolean) => {
    if (open !== undefined) {
      onOpenChange?.(value ?? !open);
      return;
    }
    setIsOpen((prev) => value ?? !prev);
  };

  return (
    <ModalContext
      value={{
        onOpenChange: handleOpenChange,
        open: open ?? isOpen,
      }}
    >
      {children}
    </ModalContext>
  );
}
