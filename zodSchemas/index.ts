import { z } from "zod";

export type LoginType = z.infer<typeof loginSchema>;
export const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export type ProfileType = z.infer<typeof profileSchema>;
export const profileSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatória"),
  rg: z.string().min(1, "RG é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatório"),
  celular: z.string().min(1, "Celular é obrigatório"),
  genero: z.tuple([
    z.string().min(1, "masculino"),
    z.string().min(1, "feminino"),
    z.string().min(1, "outro"),
  ]),
  dependentes: z.boolean(),
  dependenteNome: z.string().min(1, "Nome é obrigatório"),
  dependenteCpf: z.string().min(1, "CPF é obrigatória"),
  dependenteDataNascimento: z
    .string()
    .min(1, "Data de nascimento é obrigatório"),
});

export type ChangePasswordType = z.infer<typeof passwordSchema>;
export const passwordSchema = z.object({
  senha: z.string().min(1, "Senha é obrigatória"),
  novaSenha: z.string().min(1, "Nova senha é obrigatória"),
});

export type HoleriteType = z.infer<typeof holeriteSchema>;
export const holeriteSchema = z.object({
  ano: z.string(),
});

export type RefeicaoType = z.infer<typeof refeicaoSchema>;
export const refeicaoSchema = z.object({
  ano: z.string(),
});

export type TransporteType = z.infer<typeof transporteSchema>;
export const transporteSchema = z.object({
  ano: z.string(),
});

export type RegistrarPontoType = z.infer<typeof registrarPontoSchema>;
export const registrarPontoSchema = z.object({
  data: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});

export type EspelhoPontoType = z.infer<typeof espelhoPontoSchema>;
export const espelhoPontoSchema = z.object({
  ano: z.string(),
});

export type SolicitarAbonoType = z.infer<typeof solicitarAbonoSchema>;
export const solicitarAbonoSchema = z.object({
  motivo: z.enum(["Esqueci", "Atestado", "Justificada", "Injustificada"]),
  dataInicial: z.string().optional(),
  dataFinal: z.string().optional(),
  jornadaCompleta: z.boolean(),
  observacao: z.string().optional(),
  anexo: z.string().optional(),
});

export type AbonoHistoricoType = z.infer<typeof abonoHistoricoSchema>;
export const abonoHistoricoSchema = z.object({
  ano: z.string(),
  mes: z.string(),
});
