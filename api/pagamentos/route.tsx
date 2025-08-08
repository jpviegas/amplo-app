import { HoleriteType, RefeicaoType } from "@/zodSchemas";

export async function holerite(values: HoleriteType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pagamentos/holerite`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    },
  );

  if (!res) {
    throw new Error("Erro ao tentar");
  }

  const data = await res.json();

  return data;
}

export async function refeicao(values: RefeicaoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pagamentos/refeicao`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    },
  );

  if (!res) {
    throw new Error("Erro ao tentar");
  }

  const data = await res.json();

  return data;
}

export async function transporte(values: RefeicaoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pagamentos/transporte`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    },
  );

  if (!res) {
    throw new Error("Erro ao tentar");
  }

  const data = await res.json();

  return data;
}
