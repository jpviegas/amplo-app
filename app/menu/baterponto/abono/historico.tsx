import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { View } from "react-native";

export default function AbonoHistorico() {
  return (
    <ThemedContainer title="Solicitar Abono">
      <View className="mx-4">
        <ThemedIconCard
          link={"/menu/baterponto/abono/solicitar"}
          title="Nova Solicitação"
          icon={require("@/assets/icons/pontoeletronico.png")}
        />
        <ThemedIconCard
          link={"/menu/baterponto/abono/historico"}
          icon={require("@/assets/icons/pontoeletronico.png")}
          title="Registrar Ponto"
        />
      </View>
    </ThemedContainer>
  );
}
