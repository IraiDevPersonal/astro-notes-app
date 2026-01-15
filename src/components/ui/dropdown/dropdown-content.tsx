import { useClickOutside } from "@/hooks/use-click-outside";
import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../portal";
import { useDropdownContext } from "./dropdown-context";
import { type DropdownPlacement, type DropdownPosition } from "./type";
import {
  DROPDOWN_CONTENT_GAP,
  getTransformOrigin,
  getTransformOriginProperty,
} from "./utils";
import "./styles.css";
import { cn } from "@/lib/utils";

type DropdownContentProps = {
  placement?: DropdownPlacement;
  children: React.ReactNode;
  className?: string;
};

export function DropdownContent({
  placement = "right-end",
  className,
  children,
}: DropdownContentProps) {
  const {
    open,
    onOpenChange: setOpen,
    containerRef,
    triggerRef,
  } = useDropdownContext();
  const { position } = useDropdown(containerRef, open, placement);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(
    [dropdownRef, containerRef, triggerRef],
    () => setOpen(false),
    !open
  );

  return (
    <Portal
      data-open={open}
      ref={dropdownRef}
      visible={open}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: getTransformOrigin(placement),
        transformOrigin: getTransformOriginProperty(placement),
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

function useDropdown(
  containerRef: React.RefObject<HTMLDivElement | null>,
  open: boolean,
  placement?: DropdownPlacement
) {
  const [position, setPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
  });

  // Función para encontrar el ancestro con scroll más cercano
  const findScrollableParent = useCallback(
    (element: HTMLElement | null): HTMLElement | Window => {
      if (!element) return window;

      let parent = element.parentElement;

      while (parent) {
        const { overflow, overflowY, overflowX } =
          window.getComputedStyle(parent);
        const hasScroll =
          overflow === "auto" ||
          overflow === "scroll" ||
          overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowX === "auto" ||
          overflowX === "scroll";

        if (hasScroll) {
          return parent;
        }

        parent = parent.parentElement;
      }

      return window;
    },
    []
  );

  const calculatePosition = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "bottom":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "bottom-start":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX;
        break;
      case "bottom-end":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.right + scrollX;
        break;

      case "top":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "top-start":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX;
        break;
      case "top-end":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.right + scrollX;
        break;

      case "right":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;
      case "right-start":
        top = rect.top + scrollY;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;
      case "right-end":
        top = rect.bottom + scrollY;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;

      case "left":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
      case "left-start":
        top = rect.top + scrollY;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
      case "left-end":
        top = rect.bottom + scrollY;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
    }

    setPosition({
      top,
      left,
      width: rect.width,
    });
  }, [containerRef, placement]);

  useEffect(() => {
    calculatePosition();
  }, [calculatePosition]);

  useEffect(() => {
    if (!open || !containerRef.current) return;

    calculatePosition();

    // Encontrar el contenedor con scroll más cercano
    const scrollableParent = findScrollableParent(containerRef.current);

    // Agregar listeners
    scrollableParent.addEventListener("scroll", calculatePosition);
    window.addEventListener("resize", calculatePosition);

    return () => {
      scrollableParent.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [open, containerRef, calculatePosition, findScrollableParent]);

  return { position };
}
