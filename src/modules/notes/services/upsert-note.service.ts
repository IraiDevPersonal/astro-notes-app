import { noteApi } from "@/api/note.api";
import type { NoteModel } from "../models/note.model";
import type { CreateNoteModel } from "../models/upsert-note.model";

export async function createNoteService(note: CreateNoteModel) {
  return await noteApi.post<{ data: NoteModel }>("/notes", note);
}
