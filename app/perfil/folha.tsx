import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Folha() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Text>Folha de Pagamento</Text>
      </View>
    </ThemedContainer>
  );
}
