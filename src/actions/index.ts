import { createFolderSchema } from "@/modules/folders/schemas/upsert-folder.schema";
import { createFolderService } from "@/modules/folders/services/create-folder.service";
import { createNoteSchema } from "@/modules/notes/schemas/upsert-note.schema";
import { createNoteService } from "@/modules/notes/services/upsert-note.service";
import { defineAction } from "astro:actions";

export const server = {
  notes: {
    create: defineAction({
      // accept: "form",
      input: createNoteSchema,
      handler: async (note) => {
        return await createNoteService(note);
      },
    }),
  },
  folders: {
    create: defineAction({
      // accept: "form",
      input: createFolderSchema,
      handler: async (folder) => {
        return await createFolderService(folder);
      },
    }),
  },
};
