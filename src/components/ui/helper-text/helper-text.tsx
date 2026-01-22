import { cn } from "@/lib/utils";

type HelperTextProps = React.ComponentPropsWithRef<"output"> & {
  error?: boolean;
};

export function HelperText({
  children,
  className,
  error,
  ...props
}: HelperTextProps) {
  return (
    <output
      {...props}
      className={cn(
        "text-xs text-muted-foreground ml-auto font-light",
        error && "text-danger",
        className,
      )}
    >
      {children}
    </output>
  );
}
