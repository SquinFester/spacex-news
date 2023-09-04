import { z } from "zod";

const typesEnum = ["feed", "explore"] as const;
const categoriesEnum = ["tech", "science", "education", "business"] as const;

export const saveValidator = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum([...typesEnum]),
  category: z.enum([...categoriesEnum]),
  date: z.string().pipe(z.coerce.date()),
});
