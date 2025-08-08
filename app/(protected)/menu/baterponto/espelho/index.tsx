import { espelhoponto } from "@/api/pontoeletronico/route";
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
import { espelhoPontoSchema } from "@/zodSchemas";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Toast from "react-native-toast-message";
import { z } from "zod";

export default function EspelhoPonto() {
  const [selectedYear, setSelectedYear] = useState("");

  async function onSubmit(values: z.infer<typeof espelhoPontoSchema>) {
    try {
      const { message, success } = await espelhoponto(values);
      if (!success) {
        Toast.show({
          text1: `${message}`,
          type: "info",
        });
      } else {
        Toast.show({
          text1: `${message}`,
        });
      }
    } catch {
      Toast.show({
        text1: "Erro ao selecionar Holerite",
        type: "error",
      });
    }
  }

  useEffect(() => {
    if (selectedYear) {
      onSubmit({ ano: selectedYear });
    }
  }, [selectedYear]);

  return (
    <ThemedContainer title="Espelho de Ponto">
      <View className="h-4/5 justify-around">
        <View className="mx-4 h-full flex-col gap-4">
          <Select
            defaultValue={{ value: "ano", label: "Ano" }}
            className="mt-6 w-40 self-center"
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
                <SelectItem label="2023" value="2023" />
                <SelectItem label="2024" value="2024" />
                <SelectItem label="2025" value="2025" />
              </SelectGroup>
            </SelectContent>
          </Select>
          <ScrollView className="h-full w-full flex-1">
            {selectedYear && (
              <View className="gap-4">
                <Card className="h-14">
                  <CardContent className="mt-1">
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Jan</Text>
                      <View className="flex-row gap-4">
                        <Link
                          href={{
                            pathname: "/menu/baterponto/espelho/[ano]/[mes]",
                            params: { ano: selectedYear, mes: "01" },
                          }}
                        >
                          <View className="items-center">
                            <Image
                              source={require("@/assets/icons/visualizar.png")}
                              style={styles.iconXS}
                            />
                            <Text className="text-sm">Visualizar</Text>
                          </View>
                        </Link>
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
                        <Link
                          href={{
                            pathname: "/menu/baterponto/espelho/[ano]/[mes]",
                            params: { ano: selectedYear, mes: "02" },
                          }}
                        >
                          <View className="items-center">
                            <Image
                              source={require("@/assets/icons/visualizar.png")}
                              style={styles.iconXS}
                            />
                            <Text className="text-sm">Visualizar</Text>
                          </View>
                        </Link>
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
                        <Link
                          href={{
                            pathname: "/menu/baterponto/espelho/[ano]/[mes]",
                            params: { ano: selectedYear, mes: "03" },
                          }}
                        >
                          <View className="items-center">
                            <Image
                              source={require("@/assets/icons/visualizar.png")}
                              style={styles.iconXS}
                            />
                            <Text className="text-sm">Visualizar</Text>
                          </View>
                        </Link>
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
            )}
          </ScrollView>
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
