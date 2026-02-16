import { cn } from "@/lib/utils";
import { useDropdownContext } from "./dropdown-context";

const DEFAULT_CLASSNAME =
  "px-3 py-2 hover:bg-foreground/8 transition-colors cursor-pointer [&>svg]:size-4 flex items-center gap-2 w-full text-sm";

type DropdownItemProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function DropdownItem({
  className,
  children,
  onClick,
  href,
}: DropdownItemProps) {
  const { onOpenChange } = useDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(false);
  };

  return (
    <li aria-label="Dropdown Item" className="w-full">
      {href ? (
        <a href={href} className={cn(DEFAULT_CLASSNAME, className)}>
          {children}
        </a>
      ) : (
        <button
          onClick={handleClick}
          className={cn(DEFAULT_CLASSNAME, "no-underline", className)}
        >
          {children}
        </button>
      )}
    </li>
  );
}
