import type { PortalPlacement } from "@/lib/types";

type ArrowStyles = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform: string;
};

export function getTooltipArrowStyles(placement: PortalPlacement): ArrowStyles {
  const arrowSize = "0.5rem"; // 2 units = 0.5rem (w-2 h-2)

  const styles: Record<PortalPlacement, ArrowStyles> = {
    // Right placements (arrow apunta hacia la izquierda)
    right: {
      left: `-${arrowSize}`,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)",
    },
    "right-start": {
      left: `-${arrowSize}`,
      top: "1rem",
      transform: "rotate(45deg)",
    },
    "right-end": {
      left: `-${arrowSize}`,
      bottom: "1rem",
      transform: "rotate(45deg)",
    },

    // Left placements (arrow apunta hacia la derecha)
    left: {
      right: `-${arrowSize}`,
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)",
    },
    "left-start": {
      right: `-${arrowSize}`,
      top: "1rem",
      transform: "rotate(45deg)",
    },
    "left-end": {
      right: `-${arrowSize}`,
      bottom: "1rem",
      transform: "rotate(45deg)",
    },

    // Top placements (arrow apunta hacia abajo)
    top: {
      bottom: `-${arrowSize}`,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)",
    },
    "top-start": {
      bottom: `-${arrowSize}`,
      left: "1rem",
      transform: "rotate(45deg)",
    },
    "top-end": {
      bottom: `-${arrowSize}`,
      right: "1rem",
      transform: "rotate(45deg)",
    },

    // Bottom placements (arrow apunta hacia arriba)
    bottom: {
      top: `-${arrowSize}`,
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)",
    },
    "bottom-start": {
      top: `-${arrowSize}`,
      left: "1rem",
      transform: "rotate(45deg)",
    },
    "bottom-end": {
      top: `-${arrowSize}`,
      right: "1rem",
      transform: "rotate(45deg)",
    },
  };

  return styles[placement];
}

// Función alternativa que retorna clases de Tailwind
export function getTooltipArrowClasses(placement: PortalPlacement): string {
  const baseClasses = "absolute w-2 h-2 bg-box rotate-45";

  const borderClasses: Record<PortalPlacement, string> = {
    right: "border-l border-b",
    "right-start": "border-l border-b",
    "right-end": "border-l border-b",
    left: "border-r border-t",
    "left-start": "border-r border-t",
    "left-end": "border-r border-t",
    top: "border-b border-r",
    "top-start": "border-b border-r",
    "top-end": "border-b border-r",
    bottom: "border-t border-l",
    "bottom-start": "border-t border-l",
    "bottom-end": "border-t border-l",
  };

  const positionClasses: Record<PortalPlacement, string> = {
    right: "-left-1 top-1/2 -translate-y-1/2",
    "right-start": "-left-1 top-4",
    "right-end": "-left-1 bottom-4",
    left: "-right-1 top-1/2 -translate-y-1/2",
    "left-start": "-right-1 top-4",
    "left-end": "-right-1 bottom-4",
    top: "-bottom-1 left-1/2 -translate-x-1/2",
    "top-start": "-bottom-1 left-4",
    "top-end": "-bottom-1 right-4",
    bottom: "-top-1 left-1/2 -translate-x-1/2",
    "bottom-start": "-top-1 left-4",
    "bottom-end": "-top-1 right-4",
  };

  return `${baseClasses} ${borderClasses[placement]} ${positionClasses[placement]} border-border`;
}
