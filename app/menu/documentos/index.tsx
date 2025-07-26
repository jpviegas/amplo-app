import BackButton from "@/components/BackButton";
import LoadingScreen from "@/components/LoadingScreen";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Documentos() {
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
    <ThemedContainer title="Documentos">
      <View className="h-5/6 justify-around">
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/documentos/contrato-trabalho"}
            icon={require("@/assets/icons/documentos.png")}
            title="Contrato de Trabalho"
          />
          <ThemedIconCard
            link={"/menu/documentos/codigo-conduta"}
            icon={require("@/assets/icons/conduta.png")}
            title="Código de Conduta"
          />
          <ThemedIconCard
            link={"/menu/documentos/politica-interna"}
            icon={require("@/assets/icons/politica.png")}
            title="Política Interna"
          />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/documentos/ficha-registro"}
            icon={require("@/assets/icons/ficha.png")}
            title="Ficha de Registro"
          />
          <ThemedIconCard
            link={"/menu/documentos/ficha-epi"}
            icon={require("@/assets/icons/epi.png")}
            title="Ficha de E.P.I."
          />
          <ThemedIconCard
            link={"/menu/documentos/saude-ocupacional"}
            icon={require("@/assets/icons/saude.png")}
            title="Saúde Ocupacional"
          />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/documentos/termos"}
            icon={require("@/assets/icons/termos.png")}
            title="Termos"
          />
          <ThemedIconCard
            link={"/menu/documentos/diversos"}
            icon={require("@/assets/icons/arquivo.png")}
            title="Demais Documentos"
          />
          <View className="flex-1" />
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
