import { cn } from "@/lib/utils";
import { SidebarTrigger } from "./sidebar-trigger";

type SidebarHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return (
    <header
      aria-label="Sidebar Header"
      className={cn("flex gap-x-2 justify-between px-2", className)}
    >
      {children}
      <SidebarTrigger asClose variant="secondary" />
    </header>
  );
}
