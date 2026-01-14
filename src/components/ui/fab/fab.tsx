import { ChevronUp, Plus, X } from "lucide-react";
import { Button, type ButtonProps } from "../button";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import "./styles.css";
import { Portal } from "../portal";

type FabProps = {
  trigger?: React.ReactNode;
} & ButtonProps;

export function Fab({ trigger, children, ...props }: FabProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside([wrapperRef, portalRef], () => setIsOpen(false), !isOpen);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4" ref={wrapperRef} id="fab-wrapper">
      <Button
        onClick={handleToggleOpen}
        size={"icon-lg"}
        fullRounded
        {...props}
      >
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
        containerEl={document.getElementById("fab-wrapper")}
        data-open={isOpen}
        visible={isOpen}
        ref={portalRef}
        className={cn(
          "absolute bottom-full left-0 z-30 w-full h-max transition-discrete fab-starting-style transition-[opacity,scale] data-[open=true]:scale-100 scale-90 data-[open=true]:opacity-100 opacity-0 pb-2 flex flex-col items-center gap-y-1 origin-bottom"
        )}
      >
        {children}
      </Portal>
    </div>
  );
}
