import { cn } from "@/lib/utils";

type SidebarMenuProps = {
  children: React.ReactNode;
  className?: string;
};

export function SidebarMenu({ children, className }: SidebarMenuProps) {
  return (
    <ul
      aria-label="Sidebar Menu"
      className={cn("flex flex-col gap-y-1.5", className)}
    >
      {children}
    </ul>
  );
}
