import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function MeuHistorico() {
  const { ano, mes } = useLocalSearchParams();

  return (
    <ThemedContainer title="Meu Histórico">
      <Text>{`${mes} / ${ano}`}</Text>
      <BackButton />
    </ThemedContainer>
  );
}
