import { AbonoHistorico } from "@/api/pontoeletronico/route";
import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { abonoHistoricoSchema } from "@/zodSchemas";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { z } from "zod";

export default function HistoricoAbono() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  async function onSubmit(values: z.infer<typeof abonoHistoricoSchema>) {
    try {
      const { message, success } = await AbonoHistorico(values);
      if (!success) {
        Toast.show({
          text1: `${message}`,
          type: "info",
        });
      } else {
        Toast.show({
          text1: `${message}`,
        });
      }
    } catch {
      Toast.show({
        text1: "Erro ao selecionar Holerite",
        type: "error",
      });
    }
  }

  useEffect(() => {
    if (selectedYear) {
      onSubmit({ ano: selectedYear, mes: selectedMonth });
    }
  }, [selectedYear, selectedMonth]);

  return (
    <ThemedContainer title="Meu Histórico">
      <View className="h-2/3 w-full justify-evenly bg-primary">
        <View className="mx-4 h-4/5 items-center">
          <View className="mx-4 h-full w-full gap-4">
            <Select
              defaultValue={{ value: "year", label: "Ano" }}
              className="w-40 self-center"
              onValueChange={(value) => setSelectedYear(value?.value)}
            >
              <SelectTrigger>
                <SelectValue
                  className="native:text-lg text-sm text-foreground"
                  placeholder="Selecione o ano"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ano</SelectLabel>
                  <SelectItem label="2023" value="2023" />
                  <SelectItem label="2024" value="2024" />
                  <SelectItem label="2025" value="2025" />
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              defaultValue={{ value: "month", label: "Mês" }}
              className="w-40 self-center"
              onValueChange={(value) => setSelectedMonth(value?.value)}
            >
              <SelectTrigger>
                <SelectValue
                  className="native:text-lg text-sm text-foreground"
                  placeholder="Selecione o ano"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mês</SelectLabel>
                  <SelectItem label="01" value="01" />
                  <SelectItem label="02" value="02" />
                  <SelectItem label="03" value="03" />
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        </View>
      </View>
      <View>
        <Link
          asChild
          href={{
            pathname: "/menu/baterponto/abono/[ano]/[mes]",
            params: { ano: selectedYear, mes: selectedMonth },
          }}
        >
          <Button
            size={"lg"}
            variant="outline"
            className="w-3/5 self-center bg-green-400"
            disabled={selectedYear === "" || selectedMonth === ""}
            onPress={() => onSubmit({ ano: selectedYear, mes: selectedMonth })}
          >
            <Text className="font-black">CONFIRMAR</Text>
          </Button>
        </Link>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
