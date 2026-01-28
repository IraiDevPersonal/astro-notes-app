import { noteApi } from "@/api/note.api";
import type { ResourceModel } from "../models/resource.model";
import type { ResourceType } from "../models/resource-type.model";

export async function getResourcesService(resourceType: ResourceType) {
  return await noteApi.get<{ data: ResourceModel }>(
    "/user/550e8400-e29b-41d4-a716-446655440000/resources",
    {
      params: { type: resourceType },
    },
  );
}
