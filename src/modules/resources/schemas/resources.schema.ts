import { subFolderSchema } from "@/modules/folders/schemas/subfolder.schema";
import { z } from "astro:schema";

export const resourcesSchema = z.object({
  name: z.string(),
  id: z.string(),
  notes: z.any().array(),
  folders: subFolderSchema.array(),
});

export const resourcesResponseSchema = z.object({
  data: resourcesSchema,
});
