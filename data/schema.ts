import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.number(),
  brand: z.string(),
  name: z.string(),
  width: z.string(),
  length: z.string(),
  description: z.string(),
  link: z.string(),
  type: z.string(),
  texture: z.string(),
  material: z.string(),
  lubricated: z.string(),
  hasVLabel: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
