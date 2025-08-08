import { solicitarabono } from "@/api/pontoeletronico/route";
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
import { solicitarAbonoSchema } from "@/zodSchemas";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Toast from "react-native-toast-message";
import { z } from "zod";
import Atestado from "./(components)/Atestado";
import Esqueci from "./(components)/Esqueci";
import Injustificada from "./(components)/Injustificada";
import Justificada from "./(components)/Justificada";

export default function SolicitarAbono() {
  const [selectedReason, setSelectedReason] = useState("");

  async function onSubmit(values: z.infer<typeof solicitarAbonoSchema>) {
    try {
      const { message, success } = await solicitarabono(values);
      Toast.show({
        text1: `${message}`,
        type: success ? "success" : "info",
      });
    } catch {
      Toast.show({
        text1: "Erro ao solicitar abono",
        type: "error",
      });
    }
  }

  const renderComponent = () => {
    switch (selectedReason) {
      case "esqueci":
        return <Esqueci onSubmit={onSubmit} />;
      case "atestado":
        return <Atestado onSubmit={onSubmit} />;
      case "justificada":
        return <Justificada onSubmit={onSubmit} />;
      case "injustificada":
        return <Injustificada onSubmit={onSubmit} />;
      default:
        return null;
    }
  };

  return (
    <ThemedContainer title="Nova Solicitação">
      <View className="mx-4 h-2/3">
        <ScrollView className="flex-1">
          <View className="gap-4">
            <Select
              defaultValue={{ value: "selecione", label: "Selecione o Motivo" }}
              className="mt-6 w-1/2 self-center"
              onValueChange={(value) => setSelectedReason(value?.value)}
            >
              <SelectTrigger>
                <SelectValue
                  className="native:text-lg text-sm text-foreground"
                  placeholder="Selecione o Motivo"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione o Motivo</SelectLabel>
                  <SelectItem label="Esqueci de Bater" value="esqueci" />
                  <SelectItem label="Atestado Médico" value="atestado" />
                  <SelectItem label="Falta Justificada" value="justificada" />
                  <SelectItem
                    label="Falta Injustificada"
                    value="injustificada"
                  />
                </SelectGroup>
              </SelectContent>
            </Select>
            {renderComponent()}
          </View>
        </ScrollView>
      </View>
      <View>
        <Link asChild href={".."}>
          <Button
            size={"lg"}
            variant="outline"
            className="w-3/5 self-center bg-green-400"
          >
            <Text className="font-black">CONFIRMAR</Text>
          </Button>
        </Link>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
