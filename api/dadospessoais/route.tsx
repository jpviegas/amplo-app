import { ChangePasswordType, LoginType } from "@/zodSchemas";

export async function perfil(values: LoginType): Promise<{
  message: string;
  success: boolean;
  token: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/perfil`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!res) {
    throw new Error("Erro ao tentar login");
  }

  const data = await res.json();

  return data;
}

export async function alterarSenha(values: ChangePasswordType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alterarsenha`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!res) {
    throw new Error("Erro ao tentar login");
  }

  const data = await res.json();

  return data;
}
