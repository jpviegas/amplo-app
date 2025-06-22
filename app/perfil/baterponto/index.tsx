import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";
import { FileClock, History, MapPin } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function BaterPonto() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemedContainer>
      <View className="h-full w-11/12 justify-evenly gap-4">
        <Card className="flex-1 justify-center">
          <Link href="/perfil/baterponto/registrar">
            <CardContent className="flex-row gap-8">
              <MapPin size={32} color={isDarkColorScheme ? "white" : "black"} />
              <Text className="align-middle text-xl">REGISTRAR</Text>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex-1 justify-center">
          <Link href="/perfil/baterponto/historico">
            <CardContent className="flex-row gap-8">
              <History
                size={32}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Text className="align-middle text-xl">HISTÓRICO</Text>
            </CardContent>
          </Link>
        </Card>
        <Card className="mb-6 flex-1 justify-center">
          <Link href="/perfil/baterponto/historico">
            <CardContent className="flex-row gap-8">
              <FileClock
                size={32}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Text className="align-middle text-xl">INCLUIR SOLICITAÇÃO</Text>
            </CardContent>
          </Link>
        </Card>
      </View>
    </ThemedContainer>
  );
}
