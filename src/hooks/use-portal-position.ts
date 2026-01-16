import { PORTAL_CONTENT_GAP } from "@/lib/constants";
import type { PortalPlacement, PortalPosition } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

type UsePortalPositionProps = {
  anchorRef: React.RefObject<HTMLElement | null>;
  placement?: PortalPlacement;
  open: boolean;
  gap?: number;
};

export function usePortalPosition({
  gap = PORTAL_CONTENT_GAP,
  anchorRef,
  placement,
  open,
}: UsePortalPositionProps) {
  const [position, setPosition] = useState<PortalPosition>({
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
    const rect = anchorRef.current?.getBoundingClientRect();
    if (!rect) return;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "bottom":
        top = rect.bottom + scrollY + gap;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "bottom-start":
        top = rect.bottom + scrollY + gap;
        left = rect.left + scrollX;
        break;
      case "bottom-end":
        top = rect.bottom + scrollY + gap;
        left = rect.right + scrollX;
        break;

      case "top":
        top = rect.top + scrollY - gap;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "top-start":
        top = rect.top + scrollY - gap;
        left = rect.left + scrollX;
        break;
      case "top-end":
        top = rect.top + scrollY - gap;
        left = rect.right + scrollX;
        break;

      case "right":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + gap;
        break;
      case "right-start":
        top = rect.top + scrollY;
        left = rect.right + scrollX + gap;
        break;
      case "right-end":
        top = rect.bottom + scrollY;
        left = rect.right + scrollX + gap;
        break;

      case "left":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - gap;
        break;
      case "left-start":
        top = rect.top + scrollY;
        left = rect.left + scrollX - gap;
        break;
      case "left-end":
        top = rect.bottom + scrollY;
        left = rect.left + scrollX - gap;
        break;
    }

    setPosition({
      top,
      left,
      width: rect.width,
    });
  }, [anchorRef, placement, gap]);

  useEffect(() => {
    calculatePosition();
  }, [calculatePosition]);

  useEffect(() => {
    if (!open || !anchorRef.current) return;

    calculatePosition();

    // Encontrar el contenedor con scroll más cercano
    const scrollableParent = findScrollableParent(anchorRef.current);

    // Agregar listeners
    scrollableParent.addEventListener("scroll", calculatePosition);
    window.addEventListener("resize", calculatePosition);

    return () => {
      scrollableParent.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [open, anchorRef, calculatePosition, findScrollableParent]);

  return { position };
}
