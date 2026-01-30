import { SubFolderMapper } from "@/modules/folders/mappers/subfolder.mapper";
import type { ResourcesModel } from "../models/resource.model";
import { resourcesSchema } from "../schemas/resources.schema";

export class ResourcesMapper {
  static map(raw: unknown): { data: ResourcesModel } {
    const { success, data, error } = resourcesSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      data: {
        name: data.name,
        id: data.id,
        notes: data.notes,
        folders: data.folders.map(SubFolderMapper.map),
      },
    };
  }
}
