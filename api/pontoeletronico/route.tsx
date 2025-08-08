import {
  AbonoHistoricoType,
  EspelhoPontoType,
  RegistrarPontoType,
  SolicitarAbonoType,
} from "@/zodSchemas";

export async function registrarponto(values: RegistrarPontoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pagamentos/registrarponto`,
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

export async function espelhoponto(values: EspelhoPontoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pagamentos/espelhoponto`,
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

export async function solicitarabono(values: SolicitarAbonoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/baterponto/solicitarabono`,
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

export async function AbonoHistorico(values: AbonoHistoricoType): Promise<{
  message: string;
  success: boolean;
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/baterponto/abonohistorico`,
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
