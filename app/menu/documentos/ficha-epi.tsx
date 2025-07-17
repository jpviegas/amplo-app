import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function FichaEPI() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="mx-4 gap-4">
              <Text className="text-center text-3xl font-black">
                Ficha de E.P.I.
              </Text>
              <Card className="flex h-1/3 justify-center">
                <CardContent className="h-full justify-center">
                  <View className="my-safe w-full flex-row justify-center">
                    <View className="my-auto">
                      <Image
                        source={require("@/assets/icons/epi.png")}
                        style={styles.icon}
                      />
                    </View>
                    <View className="ml-4 w-5/6">
                      <Text className="mb-2 font-bold">Ficha de E.P.I.</Text>
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
              <Card>
                <CardContent className="flex-row justify-between py-1">
                  <View>
                    <Text>Bota de Segurança</Text>
                    <Text>CA:00000</Text>
                  </View>
                  <View>
                    <Text>00/00/000</Text>
                    <Text>00/00/000</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Image
                      source={require("@/assets/icons/assinar.png")}
                      style={styles.iconSM}
                    />
                    <Image
                      source={require("@/assets/icons/check.png")}
                      style={{ height: 12, width: 12, marginBottom: -20 }}
                    />
                  </View>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex-row justify-between py-1">
                  <View>
                    <Text>Luva de Borracha</Text>
                    <Text>CA:00000</Text>
                  </View>
                  <View>
                    <Text>00/00/000</Text>
                    <Text>00/00/000</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Image
                      source={require("@/assets/icons/assinar.png")}
                      style={styles.iconSM}
                    />
                    <Image
                      source={require("@/assets/icons/cancel.png")}
                      style={{ height: 12, width: 12, marginBottom: -20 }}
                    />
                  </View>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex-row justify-between py-1">
                  <View>
                    <Text>Luva de Borracha</Text>
                    <Text>CA:00000</Text>
                  </View>
                  <View>
                    <Text>00/00/000</Text>
                    <Text>00/00/000</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Image
                      source={require("@/assets/icons/assinar.png")}
                      style={styles.iconSM}
                    />
                    <Image
                      source={require("@/assets/icons/cancel.png")}
                      style={{ height: 12, width: 12, marginBottom: -20 }}
                    />
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
