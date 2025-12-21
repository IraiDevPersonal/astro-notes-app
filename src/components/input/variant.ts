import { cva } from "class-variance-authority";

export const inputVariant = cva(
  "p-3 rounded text-sm transition-colors outline-none! bg-input/50 placeholder:transition-colors not-disabled:hover:bg-input/70 focus-visible:bg-input/50 placeholder:text-muted-foreground/70 disabled:text-muted-foreground placeholder:italic not-disabled:hover:placeholder:text-muted-foreground placeholder:font-light border-transparent border-2 focus-visible:border-primary text-foreground/90",
  {
    variants: {
      error: {
        false: null,
        true: "not-disabled:border-danger focus-visible:border-danger text-danger/90",
      },
      success: {
        false: null,
        true: "not-disabled:border-success focus-visible:border-success text-success/90",
      },
      fullWidth: {
        false: null,
        true: "w-full",
      },
      disabled: {
        false: null,
        true: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      fullWidth: false,
      success: false,
      error: false,
    },
  }
);
