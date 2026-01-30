import type { SubFolderModel } from "../models/subfolder.model";
import { subFolderSchema } from "../schemas/subfolder.schema";

export class SubFolderMapper {
  static map(raw: unknown): SubFolderModel {
    const { success, data, error } = subFolderSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      id: data.id,
      name: data.name,
      order: data.order,
      isPinned: data.isPinned,
      owner: {
        id: data.owner.id,
        email: data.owner.email,
        userName: data.owner.userName,
        fullName: data.owner.fullName,
      },
      sharedWith: {
        count: data.sharedWith.count,
        users: data.sharedWith.users,
      },
    };
  }
}
