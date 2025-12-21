import { useId } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type CheckboxProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type" | "value"
>;

export function Checkbox({ id, className, ...props }: CheckboxProps) {
  const currentId = useId();
  const checkboxId = id ?? currentId;

  return (
    <div className="inline-flex">
      <input
        id={checkboxId}
        type="checkbox"
        className="sr-only peer"
        {...props}
      />
      <label
        htmlFor={checkboxId}
        className={cn(
          "size-6 bg-foreground/15 border border-transparent text-transparent rounded-sm flex items-center justify-center transition-colors cursor-pointer hover:text-foreground/80 hover:bg-foreground/25 peer-checked:bg-primary peer-checked:text-foreground hover:peer-checked:text-foreground hover:peer-checked:bg-primary/80 outline-transparent outline-2 peer-focus-visible:outline-ring peer-focus-visible:outline-offset-2 peer-disabled:bg-transparent hover:peer-disabled:bg-transparent hover:peer-disabled:text-transparent peer-checked:peer-disabled:text-foreground/50 peer-checked:hover:peer-disabled:text-foreground/50 peer-disabled:border-border peer-disabled:cursor-default ring-0",
          className
        )}
      >
        <Check className="size-4" />
      </label>
    </div>
  );
}
