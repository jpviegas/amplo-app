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
import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import Atestado from "./(components)/Atestado";
import Esqueci from "./(components)/Esqueci";
import Injustificada from "./(components)/Injustificada";
import Justificada from "./(components)/Justificada";

export default function SolicitarAbono() {
  const [selectedReason, setSelectedReason] = useState("");

  const renderComponent = () => {
    switch (selectedReason) {
      case "esqueci":
        return <Esqueci />;
      case "atestado":
        return <Atestado />;
      case "justificada":
        return <Justificada />;
      case "injustificada":
        return <Injustificada />;
      default:
        return null;
    }
  };

  return (
    <ThemedContainer title="Nova Solicitação">
      <View className="mx-4 h-3/4 gap-4">
        <Select
          defaultValue={{ value: "selecione", label: "Selecione o Motivo" }}
          className="w-1/2 self-center"
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
              <SelectItem label="Falta Injustificada" value="injustificada" />
            </SelectGroup>
          </SelectContent>
        </Select>
        {renderComponent()}
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
