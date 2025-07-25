import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Fragment } from "react";
import { View } from "react-native";

export default function NotFoundScreen() {
  const { ano, mes } = useLocalSearchParams();
  console.log(mes, ano);

  return (
    <ThemedContainer>
      <Fragment>
        <Stack.Screen options={{ title: "Oops!" }} />
        <View>
          <Text>Página não encontrada!</Text>
          <Link href="/">
            <Button>
              <Text>Voltar para o início</Text>
            </Button>
          </Link>
        </View>
      </Fragment>
    </ThemedContainer>
  );
}
