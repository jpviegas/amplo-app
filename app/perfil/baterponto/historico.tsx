import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Historico() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Text>Histórico do seu registro dos pontos</Text>
      </View>
    </ThemedContainer>
  );
}
