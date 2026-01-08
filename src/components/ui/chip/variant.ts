import { cva } from "class-variance-authority";

export const chipVariant = cva(
  "flex items-center justify-center w-fit border border-transparent leading-none",
  {
    variants: {
      variant: {
        default: "bg-secondary/15 text-secondary",
        outline: "border-foreground text-foreground",
        success: "bg-success/15 text-success",
        danger: "bg-danger/15 text-danger",
      },
      size: {
        default: "h-7 px-2 text-base rounded [&>svg]:size-4 gap-x-1.5",
        sm: "h-5 px-1.5 text-xs rounded-sm [&>svg]:size-3 gap-x-1",
        lg: "h-9 px-4 text-lg rounded-lg [&>svg]:size-5 gap-x-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
