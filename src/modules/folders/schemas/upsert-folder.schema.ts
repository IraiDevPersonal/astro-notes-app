import { z } from "zod";

export const createFolderSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  parentId: z.string().optional(),
  isPinned: z.boolean().optional(),
});

export const updateFolderSchema = createFolderSchema.partial();
