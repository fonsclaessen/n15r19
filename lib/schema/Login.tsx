import { z } from "zod";

const loginForm = z.object({
  email: z.string().min(1, {
    message: "Email hier",
  }),
  password: z.string().min(1, {
    message: "Password hier",
  }),
});

export const LoginFormSchema = loginForm;
