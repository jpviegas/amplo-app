import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function MeuHistorico() {
  const { ano, mes } = useLocalSearchParams();

  return (
    <ThemedContainer title="Meu Histórico">
      <View className="mx-4 h-4/5 gap-4">
        <Text>{`${mes} / ${ano}`}</Text>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
