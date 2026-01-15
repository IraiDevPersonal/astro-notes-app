import { ChevronUp, Plus, X } from "lucide-react";
import { Button, type ButtonProps } from "../button";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { Portal } from "../portal";
import "./styles.css";

type FabProps = {
  trigger?: React.ReactNode;
  children: React.ReactNode | ((closeFn: () => void) => React.ReactNode);
} & Omit<ButtonProps, "children">;

export function Fab({ trigger, children, ...props }: FabProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside([wrapperRef, portalRef], () => setIsOpen(false), !isOpen);

  const handleToggle = (open?: boolean) => () => {
    setIsOpen((prev) => open ?? !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-30" ref={wrapperRef}>
      <Button onClick={handleToggle()} size={"icon-xl"} fullRounded {...props}>
        {trigger ?? (
          <span className="relative *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2 *:transition-[opacity,display] *:transition-discrete">
            <Plus
              data-open={isOpen}
              className="block open-starting-style data-[open=true]:hidden data-[open=true]:opacity-0"
            />
            <ChevronUp
              data-open={isOpen}
              className="hidden opacity-0 close-starting-style data-[open=true]:block data-[open=true]:opacity-100"
            />
          </span>
        )}
      </Button>

      <Portal
        containerEl={wrapperRef.current}
        data-open={isOpen}
        visible={isOpen}
        ref={portalRef}
        className={cn(
          "absolute bottom-full left-0 z-30 w-full h-max transition-discrete fab-starting-style transition-[opacity,scale] data-[open=true]:scale-100 scale-90 data-[open=true]:opacity-100 opacity-0 pb-2 flex flex-col items-center gap-y-1 origin-bottom"
        )}
      >
        {typeof children === "function"
          ? children(handleToggle(false))
          : children}
      </Portal>
    </div>
  );
}
