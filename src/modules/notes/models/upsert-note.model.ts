import type z from "zod";
import type {
  createNoteSchema,
  updateNoteSchema,
} from "../schemas/upsert-note.schema";

export type CreateNoteModel = z.infer<typeof createNoteSchema>;
export type UpdateNoteModel = z.infer<typeof updateNoteSchema>;
