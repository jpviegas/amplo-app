import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
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
    <ThemedContainer title="Saúde Ocupacional">
      <View className="mx-4 h-4/5 gap-4">
        <ScrollView className="h-5/6">
          <View className="gap-4">
            <ThemedCard
              className="mt-6 flex-1"
              title="Admissional"
              icon={require("@/assets/icons/saude.png")}
            />

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
                    <Card className="mt-4 h-14">
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

            <ThemedCard
              className="flex-1"
              title="Retorno ao Trabalho"
              icon={require("@/assets/icons/saude.png")}
              sign
            />

            <ThemedCard
              className="flex-1"
              title="Demissional"
              icon={require("@/assets/icons/saude.png")}
              sign
            />
          </View>
        </ScrollView>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
