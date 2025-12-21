import { type VariantProps } from "class-variance-authority";
import { buttonVariant } from "./variant";
import { cn } from "@/lib/utils";

export type ButtonProps = Omit<
  React.ComponentPropsWithRef<"button">,
  "disabled"
> &
  VariantProps<typeof buttonVariant>;

export function Button({
  fullRounded,
  fullWidth,
  className,
  disabled,
  onClick,
  variant,
  size,
  ...props
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.className =
      "absolute rounded-full bg-white/40 animate-ripple pointer-events-none";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 500);

    onClick?.(e);
  };

  return (
    <button
      disabled={disabled || undefined}
      onClick={handleClick}
      className={cn(
        buttonVariant({
          fullRounded,
          fullWidth,
          disabled,
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}
