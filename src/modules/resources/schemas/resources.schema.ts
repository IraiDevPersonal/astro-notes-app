import { subFolderSchema } from "@/modules/folders/schemas/subfolder.schema";
import z from "zod";

export const resourcesSchema = z.object({
  name: z.string(),
  id: z.string(),
  notes: z.array(z.any()),
  folders: z.array(subFolderSchema),
});
