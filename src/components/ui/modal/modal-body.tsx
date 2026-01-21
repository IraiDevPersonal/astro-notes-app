import { cn } from "@/lib/utils";
import { ScrollArea } from "../scroll-area";

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <ScrollArea
      aria-label="Modal Body"
      className={cn("p-4 flex flex-col gap-y-2", className)}
    >
      {children}
    </ScrollArea>
  );
}
