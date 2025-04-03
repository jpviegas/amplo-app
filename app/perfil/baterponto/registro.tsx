import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Registro() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Link asChild href="/perfil/baterponto">
          <Button size={"full"}>
            <Text>Voltar</Text>
          </Button>
        </Link>
        <Text className="color-primary">
          Histórico do seu registro dos pontos
        </Text>
      </View>
    </ThemedContainer>
  );
}
