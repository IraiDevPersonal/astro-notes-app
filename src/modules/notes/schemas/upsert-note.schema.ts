import { z } from "astro:schema";

export const createNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  folderId: z.string().optional(),
  isPinned: z.boolean().optional(),
});

export const updateNoteSchema = createNoteSchema.partial();
