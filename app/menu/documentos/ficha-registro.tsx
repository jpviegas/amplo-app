import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function FichaRegistro() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="mx-4 gap-4">
              <Text className="text-center text-3xl font-black">
                Ficha de Registro
              </Text>
              <Card className="flex h-1/2 justify-center">
                <CardContent className="h-full justify-center">
                  <View className="my-safe w-full flex-row justify-center">
                    <View className="my-auto">
                      <Image
                        source={require("@/assets/icons/ficha.png")}
                        style={styles.icon}
                      />
                    </View>
                    <View className="ml-4 w-5/6">
                      <Text className="mb-2 font-bold">Ficha de Registro</Text>
                      <View className="w-full flex-row justify-evenly">
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/assinar.png")}
                            style={styles.iconSM}
                          />
                          <Text className="text-base">Assinar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/visualizar.png")}
                            style={styles.iconSM}
                          />
                          <Text className="text-base">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/compartilhar.png")}
                            style={styles.iconSM}
                          />
                          <Text className="text-base">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/baixar.png")}
                            style={styles.iconSM}
                          />
                          <Text className="text-base">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </CardContent>
              </Card>
            </View>
          </View>
          <BackButton />
        </View>
      </View>
    </ThemedContainer>
  );
}
