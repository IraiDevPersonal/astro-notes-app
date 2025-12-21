import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-provider";
import { Portal } from "../portal";
import "./styles.css";

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { open, setOpen } = useSidebar();

  return (
    <>
      <aside
        data-open={open}
        aria-label="Sidebar"
        className={cn(
          "xs:min-w-72 xs:w-72 w-full h-dvh py-8 px-6 bg-box fixed md:relative top-0 left-0 z-30 transition-transform -translate-x-full data-[open=true]:translate-x-0 md:translate-x-0 border-r border-transparent md:border-transparent xs:border-border"
        )}
      >
        <div className="flex flex-col h-full gap-y-8">{children}</div>
      </aside>
      <Portal
        visible={open}
        data-open={open}
        aria-label="Sidebar Overlay"
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-20 bg-background/50 backdrop-blur-xs transition-discrete sidebar-starting-style transition-[display,opacity] hidden xs:block md:hidden opacity-100 md:duration-75 data-[open=false]:hidden data-[open=false]:opacity-0"
      />
    </>
  );
}
