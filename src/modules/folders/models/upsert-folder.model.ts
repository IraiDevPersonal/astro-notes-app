import type { z } from "zod";
import type {
  createFolderSchema,
  updateFolderSchema,
} from "../schemas/upsert-folder.schema";

export type CreateFolderModel = z.infer<typeof createFolderSchema>;
export type UpdateFolderModel = z.infer<typeof updateFolderSchema>;
