import { type VariantProps } from "class-variance-authority";
import { inputVariant } from "../input";
import { cn } from "@/lib/utils";

type TextareaProps = Omit<React.ComponentPropsWithRef<"textarea">, "disabled"> &
  VariantProps<typeof inputVariant>;

export function Textarea({
  className,
  fullWidth,
  disabled,
  success,
  error,
  ...props
}: TextareaProps) {
  return (
    <textarea
      disabled={disabled || undefined}
      className={cn(
        inputVariant({
          success: error ? false : success,
          fullWidth,
          disabled,
          error,
        }),
        "min-h-32 resize-none",
        className
      )}
      {...props}
    ></textarea>
  );
}
