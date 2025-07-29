import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { View } from "react-native";

export default function BaterPonto() {
  return (
    <ThemedContainer title="Ponto Eletrônico">
      <View className="mx-4 h-4/5">
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/baterponto/registrar"}
            icon={require("@/assets/icons/pontoeletronico.png")}
            title="Registrar Ponto"
          />
          <ThemedIconCard
            link={"/menu/baterponto/espelho"}
            icon={require("@/assets/icons/espelho.png")}
            title="Espelho de Ponto"
          />
          <ThemedIconCard
            link={"/menu/baterponto/abono"}
            icon={require("@/assets/icons/abono.png")}
            title="Solicitar Abono"
          />
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
