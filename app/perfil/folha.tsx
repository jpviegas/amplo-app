import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Folha() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Link asChild href="..">
          <Button size={"full"}>
            <Text>Voltar</Text>
          </Button>
        </Link>
        <Text>Folha de Pagamento</Text>
      </View>
    </ThemedContainer>
  );
}
