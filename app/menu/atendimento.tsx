import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { View } from "react-native";

export default function Atendimento() {
  return (
    <ThemedContainer title="Atendimento Conecta">
      <View className="mx-4 h-4/5 gap-4">
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/atendimento/rh"}
            icon={require("@/assets/icons/rh.png")}
            title="RH"
          />
          <ThemedIconCard
            link={"/menu/atendimento/operacional"}
            icon={require("@/assets/icons/operacional.png")}
            title="Operacional"
          />
          <ThemedIconCard
            link={"/menu/atendimento/chefia"}
            icon={require("@/assets/icons/chefia.png")}
            title="Área de Treinamento"
          />
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
