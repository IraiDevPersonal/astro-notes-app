import { cn } from "@/lib/utils";
import { CreateElement } from "./create-element";

type ScrollAreaProps<T extends React.HTMLElementType> =
  React.ComponentPropsWithRef<T> & {
    children: React.ReactNode;
    as?: T;
  };

export function ScrollArea({
  as = "div",
  className,
  children,
  style,
  ...props
}: ScrollAreaProps<React.HTMLElementType>) {
  return (
    <CreateElement
      className={cn("overflow-y-auto", className)}
      style={{ scrollbarWidth: "none", ...style }}
      as={as}
      {...props}
    >
      {children}
    </CreateElement>
  );
}
