import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { FlatList, View } from "react-native";

export default function Historico() {
  return (
    <ThemedContainer>
      <View className="flex h-full w-11/12 justify-evenly gap-4">
        <Text className="text-lg">Histórico do seu registro dos pontos</Text>
        <View className="flex-row justify-around gap-4">
          <Button className="w-2/5">
            <Text>Mensal</Text>
          </Button>
          <Button className="w-2/5">
            <Text>Total</Text>
          </Button>
        </View>
        <FlatList
          className="flex-1 gap-8"
          data={[
            {
              data: "22/05/2025",
              hora: "10:00",
              tipo: "Entrada",
            },
            {
              data: "22/05/2025",
              hora: "20:00",
              tipo: "Saída",
            },
            {
              data: "23/05/2025",
              hora: "10:00",
              tipo: "Entrada",
            },
            {
              data: "23/05/2025",
              hora: "20:00",
              tipo: "Saída",
            },
          ]}
          renderItem={({ item }) => (
            <Text className="mx-auto mb-4 w-full bg-primary-foreground py-2 ps-4 text-justify">
              {`data: ${item.data} | hora: ${item.hora} | tipo: ${item.tipo}`}
            </Text>
          )}
        />
      </View>
    </ThemedContainer>
  );
}
