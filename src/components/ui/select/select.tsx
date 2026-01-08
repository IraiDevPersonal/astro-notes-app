import { cn } from "@/lib/utils";
import React from "react";
import { type InputProps, inputVariant } from "../input";
import { Option } from "./option";
import "./select.css";

type SelectOption = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

type SelectProps = {
  options?: Array<SelectOption>;
} & Omit<React.ComponentPropsWithRef<"select">, "disabled" | "children"> &
  Pick<InputProps, "fullWidth" | "disabled" | "success" | "error">;

export function Select({
  options = [],
  fullWidth,
  className,
  disabled,
  success,
  error,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={cn(
        inputVariant({
          success: error ? false : success,
          fullWidth,
          disabled,
          error,
        }),
        "h-9 relative p-2 text-sm flex items-center",
        className
      )}
      disabled={disabled || undefined}
    >
      <Option value="">Sin selección</Option>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.icon}
          {option.label}
        </Option>
      ))}
    </select>
  );
}

{
  /* <button>
    <selectedcontent className="flex justify-start items-center gap-2 [&>svg]:size-4 w-full"></selectedcontent>
  </button> */
}
