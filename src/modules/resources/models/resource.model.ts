import type { SubFolderModel } from "@/modules/folders/models/subfolder.model";
import type { NoteModel } from "@/modules/notes/models/note.model";

export type ResourcesModel = {
  name: string;
  id: string;
  notes: NoteModel[];
  folders: SubFolderModel[];
};
