import { ChevronUp, Plus, X } from "lucide-react";
import { Button, type ButtonProps } from "../button";
import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { Portal } from "../portal";
import "./styles.css";

type FabProps = {
  onOpenChange?: (value: boolean) => void;
  trigger?: React.ReactNode;
  open?: boolean;
} & ButtonProps;

export function Fab({
  onOpenChange,
  children,
  trigger,
  open,
  ...props
}: FabProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(
    (value?: boolean) => {
      if (onOpenChange && open !== undefined) {
        onOpenChange(value ?? !open);
        return;
      }
      setIsOpen((prev) => value ?? !prev);
    },
    [onOpenChange, open],
  );

  useClickOutside(
    [wrapperRef, portalRef],
    () => handleToggle(false),
    !(open ?? isOpen),
  );

  return (
    <div className="fixed bottom-4 right-4 z-30" ref={wrapperRef}>
      <Button
        onClick={() => handleToggle()}
        size={"icon-xl"}
        fullRounded
        {...props}
      >
        {trigger ?? (
          <span className="relative *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2 *:transition-[opacity,display] *:transition-discrete">
            <Plus
              data-open={open ?? isOpen}
              className="block open-starting-style data-[open=true]:hidden data-[open=true]:opacity-0"
            />
            <ChevronUp
              data-open={open ?? isOpen}
              className="hidden opacity-0 close-starting-style data-[open=true]:block data-[open=true]:opacity-100"
            />
          </span>
        )}
      </Button>

      <Portal
        containerEl={wrapperRef.current}
        data-open={open ?? isOpen}
        visible={open ?? isOpen}
        ref={portalRef}
        className={cn(
          "absolute bottom-full left-0 z-30 w-full h-max transition-discrete fab-starting-style transition-[opacity,scale] data-[open=true]:scale-100 scale-90 data-[open=true]:opacity-100 opacity-0 pb-2 flex flex-col items-center gap-y-1 origin-bottom",
        )}
      >
        {children}
      </Portal>
    </div>
  );
}
