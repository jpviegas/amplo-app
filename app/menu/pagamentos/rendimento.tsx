import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function InformeRendimento() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="mx-4 h-4/5 items-center">
            <View className="mx-4 h-full w-full">
              <Text className="text-center text-3xl font-black">
                Informe de Rendimento
              </Text>
              <View className="gap-4">
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-around">
                      <Text className="align-middle">2022</Text>
                      <View className="flex-row gap-4">
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/visualizar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/compartilhar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/baixar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Card>
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-around">
                      <Text className="align-middle">2023</Text>
                      <View className="flex-row gap-4">
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/visualizar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/compartilhar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/baixar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Card>
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-around">
                      <Text className="align-middle">2024</Text>
                      <View className="flex-row gap-4">
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/visualizar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/compartilhar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/baixar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Card>
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-around">
                      <Text className="align-middle">2025</Text>
                      <View className="flex-row gap-4">
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/visualizar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Visualizar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/compartilhar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Compartilhar</Text>
                        </View>
                        <View className="items-center">
                          <Image
                            source={require("@/assets/icons/baixar.png")}
                            style={styles.iconXS}
                          />
                          <Text className="text-sm">Baixar</Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Card>
              </View>
            </View>
          </View>
          <BackButton />
        </View>
      </View>
    </ThemedContainer>
  );
}
