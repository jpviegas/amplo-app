import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function BaterPonto() {
  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Registro do ponto</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>Ative a localização para registrar o ponto.</Text>
            <Button size={"full"}>
              <Text>Bater Ponto</Text>
            </Button>
          </CardContent>
        </Card>
        <Link asChild href="/perfil/baterponto/registro" replace>
          <Button size={"full"}>
            <Text>Registro do ponto</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/baterponto/registro" replace>
          <Button size={"full"}>
            <Text>Incluir solicitação</Text>
          </Button>
        </Link>
      </View>
    </ThemedContainer>
  );
}
