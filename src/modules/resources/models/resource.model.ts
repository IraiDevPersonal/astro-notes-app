import type { FolderModel } from "@/modules/folders/models/folder.model";
import type { NoteModel } from "@/modules/notes/models/note.model";

export type ResourceModel = {
  name: string;
  id: string;
  notes: NoteModel[];
  folders: FolderModel[];
};
