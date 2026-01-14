import { cn } from "@/lib/utils";
import { useDropdownContext } from "./dropdown-context";

type DropdownItemProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

export function DropdownItem({
  children,
  onClick,
  className,
}: DropdownItemProps) {
  const { onOpenChange } = useDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(false);
  };

  return (
    <li aria-label="Dropdown Item" className="w-full">
      <button
        onClick={handleClick}
        className={cn(
          "px-3 py-2 hover:bg-foreground/8 transition-colors cursor-pointer [&>svg]:size-4 flex items-center gap-2 w-full text-sm",
          className
        )}
      >
        {children}
      </button>
    </li>
  );
}
