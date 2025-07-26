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

export default function Diversos() {
  const [openCollapsible, setOpenCollapsible] = useState(false);
  const [openCollapsible2, setOpenCollapsible2] = useState(false);

  return (
    <ThemedContainer title="Diversos">
      <View className="mx-4 h-5/6">
        <ScrollView>
          <View className="gap-4">
            <ThemedCard
              className="flex-1"
              title="Não Optante V.T."
              icon={require("@/assets/icons/documentos.png")}
              sign
            />

            <Collapsible className="gap-4">
              <CollapsibleTrigger
                onPressIn={() => setOpenCollapsible(!openCollapsible)}
              >
                <Card className="flex-1">
                  <CardContent className="">
                    <View className="mx-4 flex-row justify-between">
                      <Text className="font-bold">Advertência</Text>
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
                    </View>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent className="gap-4">
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-between">
                      <Text className="align-middle text-sm">
                        1 - 00/00/0000
                      </Text>
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
                    <View className="w-full flex-row justify-between">
                      <Text className="align-middle text-sm">
                        2 - 00/00/0000
                      </Text>
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

            <Collapsible className="gap-4">
              <CollapsibleTrigger
                onPressIn={() => setOpenCollapsible2(!openCollapsible2)}
              >
                <Card className="flex-1">
                  <CardContent className="mx-4 flex-row justify-between">
                    <Text className="font-bold">Suspensão</Text>
                    <Image
                      source={require("@/assets/icons/seta.png")}
                      style={{
                        width: 30,
                        height: 20,
                        contentFit: "contain",
                        marginTop: 3,
                        transform: openCollapsible2
                          ? [{ rotate: "180deg" }]
                          : [{ rotate: "0deg" }],
                      }}
                    />
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent className="gap-4">
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-between">
                      <Text className="align-middle text-sm">
                        1 - 00/00/0000
                      </Text>
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
                    <View className="w-full flex-row justify-between">
                      <Text className="align-middle text-sm">
                        2 - 00/00/0000
                      </Text>
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
          </View>
        </ScrollView>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
