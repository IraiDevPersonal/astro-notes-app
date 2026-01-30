import z from "zod";
import { subFolderSchema } from "./subfolder.schema";
import { sharedUserSchema } from "@/modules/user/schemas/shared-user.schema";

export const folderSchema = z.object({
  id: z.string(),
  name: z.string(),
  order: z.number(),
  isPinned: z.boolean(),
  parentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  description: z.string(),
  commentsCount: z.number(),
  notes: z.array(z.any()),
  owner: sharedUserSchema,
  sharedWith: z.object({
    counts: z.number(),
    users: z.array(sharedUserSchema),
  }),
  modifiedBy: sharedUserSchema.nullable(),
  subfolders: z.array(subFolderSchema),
});
