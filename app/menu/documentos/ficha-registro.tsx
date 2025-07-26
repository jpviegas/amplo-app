import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import React from "react";
import { View } from "react-native";

export default function FichaRegistro() {
  return (
    <ThemedContainer title="Ficha de Registro">
      <View className="mx-4 h-5/6">
        <ThemedCard
          title="Ficha de Registro"
          icon={require("@/assets/icons/ficha.png")}
          sign={true}
        />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
