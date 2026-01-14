type DropdownMenuTitleProps = {
  children: React.ReactNode;
};

export function DropdownMenuTitle({ children }: DropdownMenuTitleProps) {
  return (
    <li className="w-full py-1.5 font-light px-3 text-muted-foreground italic pointer-events-none text-sm">
      {children}
    </li>
  );
}
