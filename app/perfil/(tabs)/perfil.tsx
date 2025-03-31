import Container from "@/components/Container";
import ThemedLink from "@/components/Link";
import { Text } from "react-native";

export default function Perfil() {
  return (
    <Container>
      <Text className="color-primary">Perfil</Text>
      <ThemedLink label="Bater Ponto" url="/perfil/baterponto" primaryColor />
      <ThemedLink label="Documentos" url="/perfil/documentos" primaryColor />
      <ThemedLink label="Sair" url="/" primaryColor={false}></ThemedLink>
    </Container>
  );
}
