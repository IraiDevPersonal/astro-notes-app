import { noteApi } from "@/api/note.api";
import type { CreateFolderModel } from "../models/upsert-folder.model";
import type { FolderModel } from "../models/folder.model";

export async function createFolderService(folder: CreateFolderModel) {
  const { data } = await noteApi.post<{ data: FolderModel }>(
    "/folders",
    folder,
  );

  return data;
}
