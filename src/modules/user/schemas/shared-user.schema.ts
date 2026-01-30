import z from "zod";

export const sharedUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  userName: z.string(),
  fullName: z.string(),
});
