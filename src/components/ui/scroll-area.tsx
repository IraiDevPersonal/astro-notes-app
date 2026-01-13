import { cn } from "@/lib/utils";
import { CreateElement } from "./create-element";

type ScrollAreaProps = {
  children: React.ReactNode;
  tag?: React.ElementType;
  className?: string;
};

export function ScrollArea({ children, className, tag }: ScrollAreaProps) {
  return (
    <CreateElement
      className={cn("overflow-y-auto", className)}
      style={{ scrollbarWidth: "none" }}
      as={tag ?? "div"}
    >
      {children}
    </CreateElement>
  );
}
