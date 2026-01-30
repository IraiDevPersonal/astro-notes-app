import { noteApi } from "@/api/note.api";
import { ResourcesMapper } from "../mappers/resources.mapper";
import type {
  ResourceFilters,
  ResourceType,
} from "../models/resource-filters.model";

export async function getResourcesService(
  resourceType?: ResourceType,
  filters?: ResourceFilters,
) {
  return await noteApi.get(
    "/user/550e8400-e29b-41d4-a716-446655440000/resources",
    {
      params: {
        ...(resourceType ? { type: resourceType } : undefined),
        ...filters,
      },
      mapper: ResourcesMapper.map,
    },
  );
}
