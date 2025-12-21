import { useRef, useState } from "react";
import { DropdownContext } from "./dropdown-context";

type DropdownProps = {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  open?: boolean;
};

export function Dropdown({ children, open, onOpenChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpenChange = (value?: boolean) => {
    if (open !== undefined) {
      onOpenChange?.(value ?? !open);
      return;
    }
    setIsOpen((prev) => value ?? !prev);
  };

  return (
    <DropdownContext
      value={{
        onOpenChange: handleOpenChange,
        open: open ?? isOpen,
        containerRef,
        triggerRef,
      }}
    >
      <div className="relative w-max" ref={containerRef}>
        {children}
      </div>
    </DropdownContext>
  );
}
