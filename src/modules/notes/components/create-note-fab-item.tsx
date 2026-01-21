import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { FilePlusCorner } from "lucide-react";
import { useRef } from "react";

type CreateNoteFabItemProps = {
  onClick: () => void;
};

export function CreateNoteFabItem({ onClick }: CreateNoteFabItemProps) {
  const noteTriggerRef = useRef<HTMLButtonElement>(null);
  return (
    <Tooltip
      triggerRef={noteTriggerRef}
      placement="left"
      showDelay={0}
      trigger={
        <Button
          fullRounded
          size={"icon-lg"}
          onClick={onClick}
          ref={noteTriggerRef}
        >
          <FilePlusCorner />
        </Button>
      }
    >
      Crear Nota
    </Tooltip>
  );
}
