import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";
import { Download, Eye, FilePen, Pencil, Share2 } from "lucide-react-native";
import React from "react";

import { View } from "react-native";

export default function FichaRegistro() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="mx-4 gap-4">
              <Text className="text-center text-3xl font-bold">
                Ficha Registro
              </Text>
              <Card>
                <Link href="/perfil/dadospessoais/editar-perfil">
                  <CardContent className="py-safe-or-3.5 flex-row items-center">
                    <View className="mb-2 w-full items-center">
                      <Text className="mb-2 font-bold">Ficha Registro</Text>
                      <View className="w-full flex-row justify-between">
                        <FilePen
                          size={40}
                          color={isDarkColorScheme ? "white" : "black"}
                        />
                        <View className="items-center">
                          <Pencil
                            size={32}
                            color={isDarkColorScheme ? "white" : "black"}
                          />
                          <Text className="text-base">Assinar</Text>
                        </View>
                        <View className="items-center">
                          <Eye
                            size={32}
                            color={isDarkColorScheme ? "white" : "black"}
                          />
                          <Text className="text-base">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Share2
                            size={32}
                            color={isDarkColorScheme ? "white" : "black"}
                          />
                          <Text className="text-base">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Download
                            size={32}
                            color={isDarkColorScheme ? "white" : "black"}
                          />
                          <Text className="text-base">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Link>
              </Card>
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
