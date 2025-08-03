import LoadingScreen from "@/components/LoadingScreen";
import { LogOutButton } from "@/components/LogOutButton";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedIconCard from "@/components/ThemedIconCard";
import { useUserStore } from "@/store/userStore";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function MenuPrincipal() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Redirect href={"/"} />;
  }

  return (
    <ThemedContainer title="Menu Principal">
      <View className="mx-4 h-4/5 justify-around">
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/dadospessoais"}
            icon={require("@/assets/icons/dadospessoais.png")}
            title="Dados Pessoais"
          />
          <ThemedIconCard
            link={"/menu/documentos"}
            icon={require("@/assets/icons/documentos.png")}
            title="Documentos"
          />
          <ThemedIconCard
            link={"/menu/pagamentos"}
            icon={require("@/assets/icons/pagamento.png")}
            title="Pagamento Benefício"
          />
        </View>
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu"}
            icon={require("@/assets/icons/ferias.png")}
            title="Férias"
          />
          <ThemedIconCard
            link={"/menu/baterponto"}
            icon={require("@/assets/icons/pontoeletronico.png")}
            title="Ponto Eletrônico"
          />
          <View className="flex-1" />
        </View>
        <View className="h-1/4 flex-row gap-4">
          <ThemedIconCard
            link={"/menu/treinamentos"}
            icon={require("@/assets/icons/treinamento.png")}
            title="Área de Treinamento"
          />
          <ThemedIconCard
            link={"/menu/aviso"}
            icon={require("@/assets/icons/aviso.png")}
            title="Aviso Comunicado"
          />
          <ThemedIconCard
            link={"/menu/atendimento"}
            icon={require("@/assets/icons/atendimento.png")}
            title="Atendimento Conecta"
          />
        </View>
      </View>
      <LogOutButton />
    </ThemedContainer>
  );
}
