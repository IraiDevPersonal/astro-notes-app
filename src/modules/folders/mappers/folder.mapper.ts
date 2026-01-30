import { SharedUserMapper } from "@/modules/user/mappers/shared-user.mapper";
import type { FolderModel } from "../models/folder.model";
import { folderSchema } from "../schemas/folder.schema";
import { SubFolderMapper } from "./subfolder.mapper";

export class FolderMapper {
  static map(raw: unknown): { data: FolderModel } {
    const { data, success, error } = folderSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      data: {
        id: data.id,
        name: data.name,
        order: data.order,
        isPinned: data.isPinned,
        owner: SharedUserMapper.map(data.owner),
        sharedWith: {
          counts: data.sharedWith.counts,
          users: data.sharedWith.users.map(SharedUserMapper.map),
        },
        modifiedBy: data.modifiedBy
          ? SharedUserMapper.map(data.modifiedBy)
          : null,
        subfolders: data.subfolders.map(SubFolderMapper.map),
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        notes: data.notes,
        commentsCount: data.commentsCount,
        parentId: data.parentId,
      },
    };
  }
}
