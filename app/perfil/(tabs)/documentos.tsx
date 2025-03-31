import Container from "@/components/Container";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Documentos() {
  return (
    <Container>
      <Text className="color-primary">Documentos</Text>
      <Pressable>
        <Link href="/">Sair</Link>
      </Pressable>
    </Container>
  );
}
