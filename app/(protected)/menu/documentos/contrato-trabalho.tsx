import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import { View } from "react-native";

export default function ContratoTrabalho() {
  return (
    <ThemedContainer title="Contrato de Trabalho">
      <View className="mx-4 h-4/5 gap-4">
        <ThemedCard
          title="Contrato de Trabalho"
          icon={require("@/assets/icons/documentos.png")}
          sign
          className="mt-6"
        />
        <ThemedCard
          title="T.R.C.T."
          icon={require("@/assets/icons/documentos.png")}
        />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
