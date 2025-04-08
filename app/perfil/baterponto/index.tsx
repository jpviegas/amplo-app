import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function BaterPonto() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Link asChild href="/perfil/baterponto/registrar">
          <Button size={"full"}>
            <Text>Registrar</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/baterponto/historico">
          <Button size={"full"}>
            <Text>Histórico de pontos</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/baterponto/historico">
          <Button size={"full"}>
            <Text>Incluir solicitação</Text>
          </Button>
        </Link>
      </View>
    </ThemedContainer>
  );
}
