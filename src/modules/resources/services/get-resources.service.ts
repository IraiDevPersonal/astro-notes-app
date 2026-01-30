import { noteApi } from "@/api/note.api";
import { ResourcesMapper } from "../mappers/resources.mapper";
import type { ResourceType } from "../models/resource-type.model";

export async function getResourcesService(resourceType?: ResourceType) {
  return await noteApi.get(
    "/user/550e8400-e29b-41d4-a716-446655440000/resources",
    {
      params: resourceType ? { type: resourceType } : undefined,
      mapper: (raw) => ResourcesMapper.map(raw),
    },
  );
}
