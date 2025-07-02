import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";
import { UserRoundCog } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function PoliticaInterna() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="mx-4 flex-row gap-4">
              <Card className="flex-1">
                <Link href="./dadospessoais/editar-perfil">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <UserRoundCog
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <View>
                      <Text>Política Interna</Text>
                      <View className="flex-row items-center justify-center gap-2">
                        <View>
                          <Text>icone</Text>
                          <Text>Assinar</Text>
                        </View>
                        <View>
                          <Text>icone</Text>
                          <Text>Visualizar</Text>
                          <View>
                            <Text>icone</Text>
                            <Text>Compartilhar</Text>
                            <View>
                              <Text>icone</Text>
                              <Text>Baixar</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Link>
              </Card>
              <View className="flex-1 bg-transparent"></View>
            </View>
          </View>
          <Link asChild href={".."}>
            <Button
              size={"full"}
              variant="outline"
              className="w-4/5 self-center"
            >
              <Text>Voltar</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
