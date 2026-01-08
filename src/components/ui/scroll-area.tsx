import { cn } from "@/lib/utils";
import { CreateElement } from "./create-element";

type ScrollAreaProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function ScrollArea({ children, className, as }: ScrollAreaProps) {
  return (
    <CreateElement
      className={cn("overflow-y-auto", className)}
      style={{ scrollbarWidth: "none" }}
      as={as ?? "div"}
    >
      {children}
    </CreateElement>
  );
}
