import { z } from "astro:schema";

export const responseSchema = <T>(data: z.ZodType<T>) =>
  z.object({ data: data });
