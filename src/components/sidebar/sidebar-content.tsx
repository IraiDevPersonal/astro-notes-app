import { cn } from "@/lib/utils";
import { ScrollArea } from "../scroll-area";

type SidebarContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function SidebarContent({ children, className }: SidebarContentProps) {
  return (
    <ScrollArea
      aria-label="Sidebar Content"
      className={cn("flex flex-col gap-y-2 grow px-2", className)}
    >
      {children}
    </ScrollArea>
  );
}
