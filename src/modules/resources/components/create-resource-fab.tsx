import { Button } from "@/components/ui/button";
import { Fab } from "@/components/ui/fab";
import { FilePlusCorner, FolderPlus } from "lucide-react";

export function CreateResourceFab() {
  return (
    <Fab>
      {(onClose) => (
        <>
          <Button size={"icon-lg"} fullRounded onClick={onClose}>
            <FolderPlus />
          </Button>

          <Button size={"icon-lg"} fullRounded onClick={onClose}>
            <FilePlusCorner />
          </Button>
        </>
      )}
    </Fab>
  );
}
