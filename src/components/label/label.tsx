import { cn } from "@/lib/utils";

type LabelProps = React.ComponentPropsWithRef<"label"> & {
  error?: boolean;
};

export function Label({ children, className, error, ...props }: LabelProps) {
  return (
    <label
      {...props}
      aria-invalid={error}
      aria-label="label"
      className={cn(
        "text-base text-muted-foreground font-medium",
        error && "text-danger",
        className
      )}
    >
      {children}
    </label>
  );
}
