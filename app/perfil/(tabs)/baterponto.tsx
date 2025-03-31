import Container from "@/components/Container";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function BaterPonto() {
  return (
    <Container>
      <Text className="color-primary">Bater Ponto</Text>
      <Pressable>
        <Link href="/">Sair</Link>
      </Pressable>
    </Container>
  );
}
