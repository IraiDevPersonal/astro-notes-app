import { type VariantProps } from "class-variance-authority";
import { PanelRightClose, X } from "lucide-react";
import { buttonVariant } from "../button/variant";
import { Button } from "../button/button";
import { useSidebar } from "./";
import { cn } from "@/lib/utils";

type SidebarTriggerProps = {
  variant?: VariantProps<typeof buttonVariant>["variant"];
  className?: string;
  asClose?: boolean;
};

export function SidebarTrigger({
  asClose = false,
  variant,
  className,
}: SidebarTriggerProps) {
  const { open, setOpen } = useSidebar();

  return (
    <Button
      size={"icon"}
      data-open={open}
      variant={variant}
      data-as-close={asClose}
      className={cn(
        "md:hidden not-[data-as-close=true]:data-[open=true]:[&>svg]:-rotate-180 [&>svg]:transition-transform",
        className
      )}
      onClick={() => setOpen(asClose ? false : undefined)}
    >
      {asClose ? <X /> : <PanelRightClose />}
    </Button>
  );
}
