import { cn } from "@/lib/utils";

type SidebarMenuItemProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  isActive?: boolean;
};

const cls = {
  root: "relative overflow-hidden border border-transparent px-4 h-9 w-full flex items-center gap-2 hover:bg-foreground/10 rounded transition-colors outline-transparent ring-0 focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
  active:
    'bg-foreground/10 after:content-[""] after:absolute after:w-2.5 after:h-full after:bg-foreground/30 after:left-0 border-foreground/30 hover:bg-foreground/15',
};

export function SidebarMenuItem({
  children,
  className,
  href,
  isActive,
}: SidebarMenuItemProps) {
  return (
    <li
      aria-label="Sidebar Menu Item"
      className={cn(href ? "" : cls.root, !href && className)}
    >
      {href ? (
        <a href={href} className={cn(cls.root, isActive && cls.active)}>
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
}
