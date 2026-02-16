import { SharedUserMapper } from "@/modules/user/mappers/shared-user.mapper";
import type { FolderModel, FolderResponseModel } from "../models/folder.model";
import { folderResponseSchema, folderSchema } from "../schemas/folder.schema";
import { SubFolderMapper } from "./subfolder.mapper";

export class FolderMapper {
  static response(raw: unknown): FolderResponseModel {
    console.log({ raw });
    const { data, success, error } = folderResponseSchema.safeParse(raw);

    if (!success) {
      throw new Error(
        error.message,
        // error.issues
        //   .map((issue) => `${issue.path[0]}: ${issue.message}`)
        //   .join(", "),
      );
    }

    return {
      data: FolderMapper.map(data),
    };
  }

  static map(raw: unknown): FolderModel {
    const { data, success, error } = folderSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
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
    };
  }
}
