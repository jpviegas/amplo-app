import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function ValeTransporte() {
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <ThemedContainer title="Vale Transporte">
      <View className="mx-4 h-4/5 items-center">
        <View className="h-full w-full gap-4">
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

          {selectedYear && (
            <ScrollView className="h-fit w-full">
              <View className="w-4/5 gap-4 self-center">
                <Card>
                  <CardContent className="mt-1">
                    <CardHeader>
                      <CardTitle className="text-center">Janeiro</CardTitle>
                    </CardHeader>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Valor Diário:</Text>
                      <Text>R$ 11,50</Text>
                    </View>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Dias Depositados:</Text>
                      <Text>10</Text>
                    </View>
                    <View className="flex-row justify-around border-t">
                      <Text className="align-middle">Valor Total:</Text>
                      <Text>R$ 115,00</Text>
                    </View>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="mt-1">
                    <CardHeader>
                      <CardTitle className="text-center">Fevereiro</CardTitle>
                    </CardHeader>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Valor Diário:</Text>
                      <Text>R$ 24,50</Text>
                    </View>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Dias Depositados:</Text>
                      <Text>20</Text>
                    </View>
                    <View className="divide-solid"></View>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Valor Total:</Text>
                      <Text>R$ 230,00</Text>
                    </View>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="mt-1">
                    <CardHeader>
                      <CardTitle className="text-center">Março</CardTitle>
                    </CardHeader>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Valor Diário:</Text>
                      <Text>R$ 24,50</Text>
                    </View>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Dias Depositados:</Text>
                      <Text>22</Text>
                    </View>
                    <View className="divide-solid"></View>
                    <View className="flex-row justify-around">
                      <Text className="align-middle">Valor Total:</Text>
                      <Text>R$ 539,00</Text>
                    </View>
                  </CardContent>
                </Card>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
