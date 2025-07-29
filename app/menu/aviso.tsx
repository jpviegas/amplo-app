import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Aviso() {
  return (
    <ThemedContainer title="Aviso e Comunicado">
      <View className="mx-4 h-4/5 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>TÍTULO</CardTitle>
            <CardDescription>Feriados do mês de Junho</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>- 11/06 Feriado Municipal</Text>
            <Text>- 16/06 Feriado Federal</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>TÍTULO</CardTitle>
            <CardDescription>Feriados do mês </CardDescription>
          </CardHeader>
          <CardContent>
            <Text>- xx/xx Feriado </Text>
            <Text>- xx/xx Feriado </Text>
          </CardContent>
        </Card>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
