import { Button } from "@/components/ui/button";
import { Fab } from "@/components/ui/fab";
import { FilePlusCorner, FolderPlus } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import { useRef } from "react";

export function CreateResourceFab() {
  const folderTriggerRef = useRef<HTMLButtonElement>(null);
  const noteTriggerRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Fab>
        {(onClose) => (
          <>
            <Tooltip
              triggerRef={folderTriggerRef}
              placement="left"
              trigger={
                <Button
                  fullRounded
                  size={"icon-lg"}
                  onClick={onClose}
                  ref={folderTriggerRef}
                >
                  <FolderPlus />
                </Button>
              }
            >
              Crear Carpeta
            </Tooltip>

            <Tooltip
              triggerRef={noteTriggerRef}
              placement="left"
              trigger={
                <Button
                  fullRounded
                  size={"icon-lg"}
                  onClick={onClose}
                  ref={noteTriggerRef}
                >
                  <FilePlusCorner />
                </Button>
              }
            >
              Crear Nota
            </Tooltip>
          </>
        )}
      </Fab>
    </>
  );
}
