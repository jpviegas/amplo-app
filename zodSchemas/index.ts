import { z } from "zod";

export type LoginType = z.infer<typeof loginSchema>;
export const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});
