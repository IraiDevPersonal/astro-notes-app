import { z } from "astro:schema";

export const subFolderSchema = z.object({
  id: z.string(),
  name: z.string(),
  order: z.number(),
  isPinned: z.boolean(),
  owner: z.object({
    id: z.string(),
    email: z.string(),
    userName: z.string(),
    fullName: z.string(),
  }),
  sharedWith: z.any().array(),
});
