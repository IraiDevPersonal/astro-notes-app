import { z } from "astro:schema";

export const sharedUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  userName: z.string(),
  fullName: z.string(),
});
