import { noteApi } from "@/api/note.api";
import type { CreateFolderModel } from "../models/upsert-folder.model";
import type { SubFolderModel } from "../models/subfolder.model";

export async function createFolderService(folder: CreateFolderModel) {
  return await noteApi.post<{ data: SubFolderModel }>("/folders", folder);
}
