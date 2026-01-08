import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ModalClose } from "./modal-close";

type ModalHeaderProps = {
  children: React.ReactNode;
  hideClose?: boolean;
  className?: string;
};

export function ModalHeader({
  children,
  className,
  hideClose,
}: ModalHeaderProps) {
  return (
    <header
      className={cn(
        "p-4 flex items-center justify-between bg-foreground/5",
        className
      )}
    >
      {children}
      {!hideClose && (
        <ModalClose size={"icon"}>
          <X />
        </ModalClose>
      )}
    </header>
  );
}
