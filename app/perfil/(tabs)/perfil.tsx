import ThemedLink from "@/components/Link";
import ThemedContainer from "@/components/ThemedContainer";
import { Text, View } from "react-native";

export default function Perfil() {
  return (
    <ThemedContainer>
      <View>
        <Text className="color-primary">Nome do funcionario</Text>
        <Text className="color-primary">mais informações...</Text>
      </View>
      <ThemedLink label="Bater Ponto" url="/perfil/baterponto" primaryColor />
      <ThemedLink label="Documentos" url="/perfil/documentos" primaryColor />
      <ThemedLink label="Sair" url="/" primaryColor={false} />
    </ThemedContainer>
  );
}
