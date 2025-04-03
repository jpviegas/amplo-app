import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Documentos() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Text>Documentos</Text>
      </View>
    </ThemedContainer>
  );
}
