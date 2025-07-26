import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import React from "react";
import { View } from "react-native";

export default function CodigoConduta() {
  return (
    <ThemedContainer title="Código de Conduta">
      <View className="mx-4 h-5/6">
        <ThemedCard
          title="Código de Conduta"
          icon={require("@/assets/icons/conduta.png")}
          sign
        />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
