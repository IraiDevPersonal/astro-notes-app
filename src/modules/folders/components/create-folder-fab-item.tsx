import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { FolderPlus } from "lucide-react";
import { useRef } from "react";

type CreateFolderFabItemProps = {
  onClick: () => void;
};

export function CreateFolderFabItem({ onClick }: CreateFolderFabItemProps) {
  const folderTriggerRef = useRef<HTMLButtonElement>(null);
  return (
    <Tooltip
      triggerRef={folderTriggerRef}
      placement="left"
      showDelay={0}
      trigger={
        <Button
          fullRounded
          size={"icon-lg"}
          onClick={onClick}
          ref={folderTriggerRef}
        >
          <FolderPlus />
        </Button>
      }
    >
      Crear Carpeta
    </Tooltip>
  );
}
