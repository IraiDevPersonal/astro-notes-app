import { useClickOutside } from "@/hooks/use-click-outside";
import { useRef } from "react";
import { Portal } from "../portal";
import { useDropdownContext } from "./dropdown-context";
import {
  cn,
  getPortalTransformOrigin,
  getPortalTransformOriginProperty,
} from "@/lib/utils";
import { usePortalPosition } from "@/hooks/use-portal-position";
import type { PortalPlacement } from "@/lib/types";
import "./styles.css";

type DropdownContentProps = {
  placement?: PortalPlacement;
  children: React.ReactNode;
  className?: string;
};

export function DropdownContent({
  placement = "right-end",
  className,
  children,
}: DropdownContentProps) {
  const { onOpenChange, containerRef, triggerRef, open } = useDropdownContext();
  const { position } = usePortalPosition({
    anchorRef: containerRef,
    placement,
    open,
  });
  const portalRef = useRef<HTMLDivElement>(null);
  useClickOutside(
    [portalRef, containerRef, triggerRef],
    () => onOpenChange(false),
    !open
  );

  return (
    <Portal
      data-open={open}
      ref={portalRef}
      visible={open}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: getPortalTransformOrigin(placement),
        transformOrigin: getPortalTransformOriginProperty(placement),
      }}
      className={cn(
        "my-1 z-30 min-w-36 w-max transition-discrete portal-starting-style transition-[opacity,scale,display] data-[open=true]:scale-100 scale-95 data-[open=true]:opacity-100 opacity-0 bg-box rounded-lg border border-border p-1 shadow-2xl shadow-foreground/5",
        className
      )}
    >
      <ul className="rounded overflow-hidden">{children}</ul>
    </Portal>
  );
}
