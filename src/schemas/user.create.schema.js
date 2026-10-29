import z from "zod";

export const createUserSchema = z.object({
  body: z.object({
    username: z
      .string({ error: "Username must be a string." })
      .trim()
      .min(3, { error: "Username must be at least 3 characters." })
      .max(10, { error: "Username cannot be longer than 10 characters." }),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email({ message: "Email must be a valid email." })
      .max(254, { message: "Email is too long." }),
  }),
});
