import { cn } from "@/lib/utils";

type OptionProps = React.ComponentProps<"option">;

export function Option({ className, ...props }: OptionProps) {
  return (
    <option
      className={cn(
        "flex justify-start items-center gap-2 p-2 transition-colors bg-input/50 text-foreground hover:bg-input hover:checked:bg-primary/80 checked:bg-primary text-sm [&>svg]:size-4 cursor-pointer outline-none ring-0 focus-visible:bg-input",
        className
      )}
      {...props}
    />
  );
}
