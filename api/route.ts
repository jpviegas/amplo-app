import { LoginType } from "@/zodSchemas";

export async function login(values: LoginType): Promise<{
  message: string;
  success: boolean;
  token: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuario`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!res) {
    throw new Error("Erro ao tentar login");
  }

  const data = await res.json();

  return data;
}
