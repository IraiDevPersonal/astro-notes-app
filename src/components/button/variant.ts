import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "font-medium flex gap-2 items-center justify-center transition-colors overflow-hidden min-w-fit relative outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2 leading-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground not-disabled:hover:bg-primary/80 focus-visible:outline-ring",
        text: "text-secondary bg-transparent not-disabled:hover:bg-secondary/6 focus-visible:outline-secondary",
        secondary:
          "text-secondary bg-secondary/8 not-disabled:hover:bg-secondary/15 focus-visible:outline-secondary",
        danger:
          "text-danger-foreground bg-danger not-disabled:hover:bg-danger/80 focus-visible:outline-danger",
      },
      size: {
        default: "text-sm px-3 h-9 [&>svg]:size-4 rounded",
        sm: "text-xs px-2 h-8 [&>svg]:size-4 rounded-sm",
        lg: "text-lg px-4 h-12 [&>svg]:size-6 rounded-xl",
        icon: "text-sm h-9 w-9 min-w-9 [&>svg]:size-4 rounded",
        "icon-sm": "text-base h-8 w-8 min-w-8 [&>svg]:size-4 rounded-sm",
        "icon-lg": "text-lg h-12 w-12 min-w-12 [&>svg]:size-6 rounded-xl",
      },
      fullRounded: {
        true: "rounded-full",
        false: null,
      },
      fullWidth: {
        true: "w-full",
        false: null,
      },
      disabled: {
        false: null,
        true: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullRounded: false,
      fullWidth: false,
      disabled: false,
    },
  }
);
