import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import React from "react";
import { View } from "react-native";

export default function PoliticaInterna() {
  return (
    <ThemedContainer title="Política Interna">
      <View className="mx-4 h-4/5">
        <ThemedCard
          title="Política Interna"
          icon={require("@/assets/icons/politica.png")}
          sign
          className="mt-6"
        />
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
