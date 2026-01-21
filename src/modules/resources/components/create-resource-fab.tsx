import { Fab } from "@/components/ui/fab";
import { CreateFolderFabItem } from "@/modules/folders/components/create-folder-fab-item";
import { CreateFolderModal } from "@/modules/folders/components/create-folder-modal";
import { CreateNoteFabItem } from "@/modules/notes/components/create-note-fab-item";
import { CreateNoteModal } from "@/modules/notes/components/create-note-modal";
import { useState } from "react";

export function CreateResourceFab() {
  const [openFab, setOpenFab] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);

  return (
    <>
      <Fab open={openFab} onOpenChange={setOpenFab}>
        <CreateFolderFabItem
          onClick={() => {
            setOpenFolder(true);
            setOpenFab(false);
          }}
        />

        <CreateNoteFabItem
          onClick={() => {
            setOpenNote(true);
            setOpenFab(false);
          }}
        />
      </Fab>

      <CreateFolderModal open={openFolder} onOpenChange={setOpenFolder} />
      <CreateNoteModal open={openNote} onOpenChange={setOpenNote} />
    </>
  );
}
