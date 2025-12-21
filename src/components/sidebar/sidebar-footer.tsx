import { cn } from "@/lib/utils";

type SidebarFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export function SidebarFooter({ children, className }: SidebarFooterProps) {
  return (
    <footer
      aria-label="Sidebar Footer"
      className={cn("flex flex-col gap-y-2 px-2", className)}
    >
      {children}
    </footer>
  );
}
