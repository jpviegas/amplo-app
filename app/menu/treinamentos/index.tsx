import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Treinamentos() {
  return (
    <ThemedContainer title="Treinamentos">
      <View className="mx-4 h-4/5">
        <View className="h-full justify-evenly gap-4">
          <Card className="h-2/5">
            <CardHeader>
              <CardTitle>TÍTULO</CardTitle>
              <CardDescription>Curso de boas práticas</CardDescription>
            </CardHeader>
            <CardContent className="justify-between">
              <View className="w-4/5 self-center bg-gray-300">
                <Text>foto ilustrativa</Text>
              </View>
              <Button className="w-1/2 self-center bg-green-500">
                <Text>ACESSAR</Text>
              </Button>
            </CardContent>
          </Card>
          <Card className="h-2/5">
            <CardHeader>
              <CardTitle>TÍTULO</CardTitle>
              <CardDescription>
                Uso correto de equipamento de proteção individual
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-between">
              <View className="w-4/5 self-center bg-gray-300">
                <Text>foto ilustrativa</Text>
              </View>
              <Button className="w-1/2 self-center bg-green-500">
                <Text>ACESSAR</Text>
              </Button>
            </CardContent>
          </Card>
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
