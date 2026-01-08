import { cn } from "@/lib/utils";

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <footer
      aria-label="Modal Footer"
      className={cn("p-4 flex items-center justify-end gap-2", className)}
    >
      {children}
    </footer>
  );
}
