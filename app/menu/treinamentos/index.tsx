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
      <View className="h-5/6 justify-around">
        <View className="mx-4 h-full gap-4">
          <Card className="flex-1 justify-around">
            <CardHeader>
              <CardTitle>TÍTULO</CardTitle>
              <CardDescription>Curso de boas práticas</CardDescription>
            </CardHeader>
            <CardContent className="justify-between">
              <View className="h-1/2 w-4/5 self-center bg-gray-300">
                <Text>foto ilustrativa</Text>
              </View>
              <Button className="w-1/2 self-center bg-green-500">
                <Text>ACESSAR</Text>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>TÍTULO</CardTitle>
              <CardDescription>
                Uso correto de equipamento de proteção individual
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-between">
              <View className="h-1/2 w-4/5 self-center bg-gray-300">
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
