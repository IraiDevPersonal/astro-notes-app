import type { z } from "astro:schema";
import type {
  createNoteSchema,
  updateNoteSchema,
} from "../schemas/upsert-note.schema";

export type CreateNoteModel = z.infer<typeof createNoteSchema>;
export type UpdateNoteModel = z.infer<typeof updateNoteSchema>;
