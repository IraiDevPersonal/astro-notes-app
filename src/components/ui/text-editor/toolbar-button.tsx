import { useRef } from "react";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

type ToolbarButtonProps = {
  children: React.ReactNode;
  tooltipContent: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
};

export function ToolbarButton({
  onClick,
  disabled,
  isActive,
  children,
  tooltipContent,
}: ToolbarButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Tooltip
      placement="bottom"
      triggerRef={buttonRef}
      trigger={
        <Button
          ref={buttonRef}
          onClick={onClick}
          disabled={disabled}
          variant={isActive ? "secondary" : "text"}
          size={"icon"}
          tabIndex={-1}
        >
          {children}
        </Button>
      }
    >
      <p className="text-sm text-muted-foreground">{tooltipContent}</p>
    </Tooltip>
  );
}
