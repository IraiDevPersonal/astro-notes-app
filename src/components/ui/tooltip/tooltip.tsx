import "./styles.css";
import { usePortalPosition } from "@/hooks/use-portal-position";
import type { PortalPlacement } from "@/lib/types";
import {
  cn,
  getPortalTransformOrigin,
  getPortalTransformOriginProperty,
} from "@/lib/utils";
import { useEffect, useState } from "react";
import { Portal } from "../portal";
import { getTooltipArrowClasses } from "./utils";

type TooltipProps = {
  triggerRef: React.RefObject<HTMLElement | null>;
  placement?: PortalPlacement;
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  showDelay?: number;
  hideDelay?: number;
};

export function Tooltip({
  trigger,
  children,
  className,
  triggerRef,
  hideDelay = 0,
  showDelay = 500,
  placement = "top",
}: TooltipProps) {
  const open = useTooltip(triggerRef, showDelay, hideDelay);
  const { position } = usePortalPosition({
    anchorRef: triggerRef,
    placement,
    gap: 10,
    open,
  });

  return (
    <>
      {trigger}

      <Portal
        data-open={open}
        visible={open}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: getPortalTransformOrigin(placement),
          transformOrigin: getPortalTransformOriginProperty(placement),
        }}
        className={cn(
          "z-30 w-max transition-[opacity,scale] data-[open=true]:scale-100 scale-95 data-[open=true]:opacity-100 opacity-0 bg-box rounded border border-border px-4 py-2 shadow-xl shadow-foreground/5 tooltip-starting-style transition-discrete",
          className,
        )}
      >
        {children}
        <span className={getTooltipArrowClasses(placement)}></span>
      </Portal>
    </>
  );
}

function useTooltip(
  triggerRef: React.RefObject<HTMLElement | null>,
  showDelay: number,
  hideDelay: number,
) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    let enterTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;

    if (!triggerElement) return;

    const handleMouseEnter = () => {
      clearTimeout(exitTimeout);
      enterTimeout = setTimeout(() => setOpen(true), showDelay);
    };
    const handleMouseLeave = () => {
      clearTimeout(enterTimeout);
      exitTimeout = setTimeout(() => setOpen(false), hideDelay);
    };

    triggerElement.addEventListener("mouseenter", handleMouseEnter);
    triggerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      triggerElement.removeEventListener("mouseenter", handleMouseEnter);
      triggerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [triggerRef]);

  return open;
}
