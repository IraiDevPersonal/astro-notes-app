import { cn } from "@/lib/utils";
import { CreateElement } from "./create-element";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";

type TypographyProps<T extends Tag = Tag> = React.ComponentPropsWithRef<T> & {
  className?: string;
  muted?: boolean;
  as?: T;
};

const classNames: Record<Tag, string> = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-bold leading-tight",
  h3: "text-2xl font-medium leading-tight",
  h4: "text-xl font-medium leading-tight",
  h5: "text-lg font-medium leading-tight",
  h6: "text-base font-medium leading-tight",
  p: "text-base font-normal leading-relaxed",
  small: "text-sm font-normal leading-relaxed",
};

export function Typography<T extends Tag = Tag>({
  className,
  children,
  muted,
  as,
  ...props
}: TypographyProps<T>) {
  return (
    <CreateElement
      as={as ?? "p"}
      class={cn(
        classNames[as ?? "p"],
        muted && "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </CreateElement>
  );
}
