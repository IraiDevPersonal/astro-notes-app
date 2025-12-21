import { cn } from "@/lib/utils";
import { Portal } from "../portal";
import { useModalContext } from "./modal-context";
import "./styles.css";

type ModalOverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
  className?: string;
};

export function ModalOverlay({
  shouldCloseOnOverlayClick = true,
  className,
}: ModalOverlayProps) {
  const { open, onOpenChange } = useModalContext();

  return (
    <Portal
      visible={open}
      data-open={open}
      aria-label="Modal Overlay"
      className={cn(
        "fixed inset-0 z-50 bg-background/50 backdrop-blur-xs transition-discrete overlay-starting-style transition-opacity opacity-0 data-[open=true]:opacity-100",
        className
      )}
      onClick={() => {
        if (shouldCloseOnOverlayClick) {
          onOpenChange(false);
        }
      }}
    />
  );
}
