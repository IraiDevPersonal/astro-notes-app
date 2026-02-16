import type { NoteModel } from "@/modules/notes/models/note.model";
import type { SubFolderModel } from "./subfolder.model";
import type { SharedUserModel } from "@/modules/user/models/shared-user.model";

export type FolderModel = {
  id: string;
  name: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  isPinned: boolean;
  notes: NoteModel[];
  commentsCount: number;
  owner: SharedUserModel;
  parentId: string | null;
  description?: string | null;
  modifiedBy: SharedUserModel | null;
  sharedWith: {
    counts: number;
    users: SharedUserModel[];
  };
  subfolders: SubFolderModel[];
};

export type FolderResponseModel = {
  data: FolderModel;
};
