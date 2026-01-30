import { noteApi } from "@/api/note.api";
import { FolderMapper } from "../mappers/folder.mapper";

export const getFolderByIdService = async (id: string) => {
  return await noteApi.get(`/folders/${id}`, {
    mapper: FolderMapper.map,
  });
};
