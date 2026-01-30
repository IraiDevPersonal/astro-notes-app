import { Button } from "@/components/ui/button";
import { Fab } from "@/components/ui/fab";
import { CreateFolderModal } from "@/modules/folders/components/create-folder-modal";
import { CreateNoteModal } from "@/modules/notes/components/create-note-modal";
import { Folder, StickyNote } from "lucide-react";
import { useState } from "react";

type CreateResourceFabProps = {
  folderId?: string;
};

export function CreateResourceFab({ folderId }: CreateResourceFabProps) {
  const [openFab, setOpenFab] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);

  return (
    <>
      <Fab open={openFab} onOpenChange={setOpenFab}>
        <Button
          size={"lg"}
          variant={"fab-item"}
          onClick={() => {
            setOpenFolder(true);
            setOpenFab(false);
          }}
        >
          Crear Carpeta
          <Folder />
        </Button>

        <Button
          size={"lg"}
          variant={"fab-item"}
          onClick={() => {
            setOpenNote(true);
            setOpenFab(false);
          }}
        >
          Crear Nota
          <StickyNote />
        </Button>
      </Fab>

      <CreateFolderModal
        folderId={folderId}
        open={openFolder}
        onOpenChange={setOpenFolder}
      />
      <CreateNoteModal
        folderId={folderId}
        open={openNote}
        onOpenChange={setOpenNote}
      />
    </>
  );
}
