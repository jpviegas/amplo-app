import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function PrimeiroAcesso() {
  return (
    <ThemedContainer>
      <View className="h-4/5 w-5/6 justify-around">
        <Text>primeiro acesso...</Text>
      </View>
    </ThemedContainer>
  );
}
