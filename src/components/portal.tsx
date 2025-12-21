import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  containerEl?: HTMLElement | null;
  visible?: boolean;
} & React.ComponentPropsWithRef<"div">;

export function Portal({
  onTransitionEnd,
  containerEl,
  children,
  visible,
  ...props
}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (visible) {
      setMounted(true);
    }
  }, [visible]);

  if (!mounted) return null;

  return createPortal(
    <div
      {...props}
      onTransitionEnd={(e) => {
        if (!visible) {
          setMounted(false);
        }
        onTransitionEnd?.(e);
      }}
    >
      {children}
    </div>,
    containerEl ?? document.body
  );
}
