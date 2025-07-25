import LoadingScreen from "@/components/LoadingScreen";
import { LogOutButton } from "@/components/LogOutButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function MenuPrincipal() {
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
    <ThemedContainer title="Menu Principal">
      <View className="h-5/6 justify-around">
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedCard
            link={"/menu/dadospessoais"}
            icon={require("@/assets/icons/dadospessoais.png")}
            title="Dados Pessoais"
          />
          <ThemedCard
            link={"/menu/documentos"}
            icon={require("@/assets/icons/documentos.png")}
            title="Documentos"
          />
          <ThemedCard
            link={"/menu/pagamentos"}
            icon={require("@/assets/icons/pagamento.png")}
            title="Pagamento Benefício"
          />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedCard
            link={"/menu/documentos"}
            icon={require("@/assets/icons/ferias.png")}
            title="Férias"
          />
          <ThemedCard
            link={"/menu/baterponto"}
            icon={require("@/assets/icons/pontoeletronico.png")}
            title="Ponto Eletrônico"
          />
          <ThemedCard
            link={"/menu/treinamentos"}
            icon={require("@/assets/icons/treinamento.png")}
            title="Área de Treinamento"
          />
        </View>
        <View className="mx-4 h-1/4 flex-row gap-4">
          <ThemedCard
            link={"/menu/documentos"}
            icon={require("@/assets/icons/aviso.png")}
            title="Aviso Comunicado"
          />
          <ThemedCard
            link={"/menu/documentos"}
            icon={require("@/assets/icons/arquivo.png")}
            title="Atendimento Conecta"
          />
          <View className="flex-1" />
        </View>
      </View>
      <LogOutButton />
    </ThemedContainer>
  );
}
