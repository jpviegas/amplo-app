import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Holerite() {
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <ThemedContainer title="Holerite">
      <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
        <View className="mx-4 h-4/5 items-center">
          <View className="mx-4 h-full w-full gap-4">
            <Select
              defaultValue={{ value: "ano", label: "Ano" }}
              className="w-40 self-center"
              onValueChange={(value) => setSelectedYear(value?.label)}
            >
              <SelectTrigger>
                <SelectValue
                  className="native:text-lg text-sm text-foreground"
                  placeholder="Selecione o ano"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ano</SelectLabel>
                  <SelectItem label="2023" value="2023">
                    2023
                  </SelectItem>
                  <SelectItem label="2024" value="2024">
                    2024
                  </SelectItem>
                  <SelectItem label="2025" value="2025">
                    2025
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            (
            {selectedYear !== "" && (
              <ScrollView className="h-fit w-full">
                <View className="gap-4">
                  <Card className="h-14">
                    <CardContent className="mt-1">
                      <View className="flex-row justify-around">
                        <Text className="align-middle">Jan</Text>
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
                        <Text className="align-middle">Fev</Text>
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
                        <Text className="align-middle">Mar</Text>
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
              </ScrollView>
            )}
            )
          </View>
        </View>
        <BackButton />
      </View>
    </ThemedContainer>
  );
}
