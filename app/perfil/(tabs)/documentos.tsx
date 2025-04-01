import ThemedLink from "@/components/Link";
import ThemedContainer from "@/components/ThemedContainer";
import { Text } from "react-native";

export default function Documentos() {
  return (
    <ThemedContainer>
      <Text className="color-primary">Documentos</Text>
      <ThemedLink label="Sair" url="/" primaryColor={false} />
    </ThemedContainer>
  );
}
