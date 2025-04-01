import ThemedLink from "@/components/Link";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "react-native";

export default function BaterPonto() {
  return (
    <ThemedContainer>
      <Text className="color-primary">Bater Ponto</Text>
      <ThemedLink label="Sair" url="/" primaryColor={false} />
    </ThemedContainer>
  );
}
