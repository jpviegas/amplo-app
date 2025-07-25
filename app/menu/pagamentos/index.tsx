import BackButton from "@/components/BackButton";
import LoadingScreen from "@/components/LoadingScreen";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Pagamentos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemedContainer title="Pagamento Benefícios">
      <View className="h-5/6 justify-around">
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/pagamentos/holerite"}
            icon={require("@/assets/icons/registrarponto.png")}
            title="Holerite"
          />
          <ThemedIconCard
            link={"/menu/pagamentos/refeicao"}
            icon={require("@/assets/icons/refeicao.png")}
            title="Vale Refeição"
          />
          <ThemedIconCard
            link={"/menu/pagamentos/refeicao"}
            icon={require("@/assets/icons/valealimentacao.png")}
            title="Vale Alimentação"
          />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/pagamentos/transporte"}
            icon={require("@/assets/icons/transporte.png")}
            title="Vale Transporte"
          />
          <ThemedIconCard
            link={"/menu/pagamentos/rendimento"}
            icon={require("@/assets/icons/rendimentos.png")}
            title="Informe de Rendimentos"
          />
          <View className="flex-1"></View>
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4" />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
