import { cn } from "@/lib/utils";

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div
      aria-label="Modal Body"
      className={cn("p-4 flex flex-col gap-y-2", className)}
    >
      {children}
    </div>
  );
}
