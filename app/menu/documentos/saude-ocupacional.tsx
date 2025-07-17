import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function SaudeOcupacional() {
  const [openCollapsible, setOpenCollapsible] = useState(false);

  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="mx-4 h-full gap-4">
              <Text className="text-center text-3xl font-black">
                Saúde Ocupacional
              </Text>
              <ScrollView className="h-5/6">
                <View className="gap-4">
                  <Card className="flex-1">
                    <CardContent className="h-full justify-center">
                      <View className="my-safe w-full flex-row">
                        <View className="my-auto">
                          <Image
                            source={require("@/assets/icons/saude.png")}
                            style={styles.icon}
                          />
                        </View>
                        <View className="ml-4 w-5/6">
                          <Text className="mb-2 font-bold">Admissional</Text>
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

                  <Card className="flex-1">
                    <CardContent className="mt-2">
                      <Collapsible>
                        <CollapsibleTrigger
                          onPressIn={() => setOpenCollapsible(!openCollapsible)}
                          className="mx-4 flex-row justify-between"
                        >
                          <Text className="flex-1 font-bold">Periódico</Text>
                          <Image
                            source={require("@/assets/icons/seta.png")}
                            style={{
                              width: 30,
                              height: 20,
                              contentFit: "contain",
                              marginTop: 3,
                              transform: openCollapsible
                                ? [{ rotate: "180deg" }]
                                : [{ rotate: "0deg" }],
                            }}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex-1 gap-4">
                          <Card className="h-14">
                            <CardContent className="mt-1">
                              <View className="flex-row justify-evenly">
                                <Text className="align-middle">2022</Text>
                                <View className="items-center">
                                  <Image
                                    source={require("@/assets/icons/assinar.png")}
                                    style={styles.iconXS}
                                  />
                                  <Text className="text-sm">Assinar</Text>
                                </View>
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
                            </CardContent>
                          </Card>
                          <Card className="h-14">
                            <CardContent className="mt-1">
                              <View className="w-full flex-row justify-evenly">
                                <Text className="align-middle">2023</Text>
                                <View className="items-center">
                                  <Image
                                    source={require("@/assets/icons/assinar.png")}
                                    style={styles.iconXS}
                                  />
                                  <Text className="text-sm">Assinar</Text>
                                </View>
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
                            </CardContent>
                          </Card>
                          <Card className="h-14">
                            <CardContent className="mt-1">
                              <View className="w-full flex-row justify-evenly">
                                <Text className="align-middle">2024</Text>
                                <View className="items-center">
                                  <Image
                                    source={require("@/assets/icons/assinar.png")}
                                    style={styles.iconXS}
                                  />
                                  <Text className="text-sm">Assinar</Text>
                                </View>
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
                            </CardContent>
                          </Card>
                          <Card className="h-14">
                            <CardContent className="mt-1">
                              <View className="w-full flex-row justify-evenly">
                                <Text className="align-middle">2025</Text>
                                <View className="items-center">
                                  <Image
                                    source={require("@/assets/icons/assinar.png")}
                                    style={styles.iconXS}
                                  />
                                  <Text className="text-sm">Assinar</Text>
                                </View>
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
                            </CardContent>
                          </Card>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 justify-center">
                    <CardContent className="h-full justify-center">
                      <View className="my-safe w-full flex-row justify-center">
                        <View className="my-auto">
                          <Image
                            source={require("@/assets/icons/documentos.png")}
                            style={styles.icon}
                          />
                        </View>
                        <View className="ml-4 w-5/6">
                          <Text className="mb-2 font-bold">
                            Retorno ao Trabalho
                          </Text>
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
                  <Card className="flex-1 justify-center">
                    <CardContent className="h-full justify-center">
                      <View className="my-safe w-full flex-row justify-center">
                        <View className="my-auto">
                          <Image
                            source={require("@/assets/icons/documentos.png")}
                            style={styles.icon}
                          />
                        </View>
                        <View className="ml-4 w-5/6">
                          <Text className="mb-2 font-bold">Demissional</Text>
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
              </ScrollView>
            </View>
          </View>
          <BackButton />
        </View>
      </View>
    </ThemedContainer>
  );
}
