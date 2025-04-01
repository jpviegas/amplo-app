import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function DadosPessoais() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <View>
          <Text className="color-primary">Nome do funcionario</Text>
          <Text className="color-primary">mais informações...</Text>
        </View>
      </View>
    </ThemedContainer>
  );
}
