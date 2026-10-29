import z from "zod";

// Schema for a single card validation
const singleCardSchema = z.object({
  name: z.string({ error: "name must be a string" }),
  cost: z.string({ error: "cost must be a string" }),
  type: z.string({ error: "type must be a string" }),
  print: z.string({ error: "print must be a string" }),
  rulesText: z.string({ error: "rulesText must be a string" }),
  flavorText: z.string({ error: "flavorText must be a string" }),
  power: z.string({ error: "power must be a string" }),
  toughness: z.string({ error: "toughness must be a string" }),
});

// Allow either a single card object OR an array of card objects
export const addCardSchema = z.object({
  body: z.union([singleCardSchema, z.array(singleCardSchema)]),
});
