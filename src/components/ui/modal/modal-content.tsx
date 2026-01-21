import { useKeyDown } from "@/hooks/use-key-down";
import { cn } from "@/lib/utils";
import { useModalContext } from "./modal-context";
import { Portal } from "../portal";
import "./styles.css";

type ModalContentProps = {
  shouldCloseOnOverlayClick?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function ModalContent({
  shouldCloseOnOverlayClick = true,
  className,
  children,
}: ModalContentProps) {
  const { open, onOpenChange } = useModalContext();
  useKeyDown(
    "Escape",
    () => onOpenChange(false),
    !open || !shouldCloseOnOverlayClick,
  );

  return (
    <Portal
      aria-modal
      role="dialog"
      aria-label="Modal"
      visible={open}
      data-open={open}
      className={cn(
        "z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-box border border-border h-dvh md:h-auto md:rounded-xl w-full md:w-96 shadow-2xl transition-discrete content-starting-style transition-[opacity,scale,display,height,width] opacity-0 data-[open=true]:opacity-100 scale-95 data-[open=true]:scale-100 origin-top overflow-hidden divide-y divide-border",
        className,
      )}
    >
      {children}
    </Portal>
  );
}
