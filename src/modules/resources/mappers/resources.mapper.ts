import { SubFolderMapper } from "@/modules/folders/mappers/subfolder.mapper";
import type {
  ResourcesModel,
  ResourcesResponseModel,
} from "../models/resource.model";
import {
  resourcesResponseSchema,
  resourcesSchema,
} from "../schemas/resources.schema";

export class ResourcesMapper {
  static response(raw: unknown): ResourcesResponseModel {
    const { success, data, error } = resourcesResponseSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      data: ResourcesMapper.map(data.data),
    };
  }

  static map(raw: unknown): ResourcesModel {
    const { success, data, error } = resourcesSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      id: data.id,
      name: data.name,
      notes: data.notes,
      folders: data.folders.map(SubFolderMapper.map),
    };
  }
}
