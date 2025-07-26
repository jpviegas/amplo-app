import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { View } from "react-native";

export default function Abono() {
  return (
    <ThemedContainer title="Solicitar Abono">
      <View className="h-5/6 justify-around">
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/baterponto/abono/solicitar"}
            title="Nova Solicitação"
            icon={require("@/assets/icons/solicitacao.png")}
          />
          <ThemedIconCard
            link={"/menu/baterponto/abono/historico"}
            icon={require("@/assets/icons/espelho.png")}
            title="Registrar Ponto"
          />
          <View className="flex-1" />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4" />
        <View className="mx-4 h-1/4 flex-row gap-4" />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
