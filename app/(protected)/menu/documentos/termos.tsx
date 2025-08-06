import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import { View } from "react-native";

export default function Termos() {
  return (
    <ThemedContainer title="Termos">
      <View className="mx-4 h-4/5 gap-4">
        <ThemedCard
          title="Confidencialidade"
          icon={require("@/assets/icons/documentos.png")}
          sign
          className="mt-6"
        />
        <ThemedCard
          title="Resp Uso de E.P.I."
          icon={require("@/assets/icons/documentos.png")}
          sign
        />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
